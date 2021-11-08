import Image from "next/image";
import TopNav from '../components/TopNav';
import Button from '../components/Button';
import Input from '../components/Input';
import { useEffect, useState } from "react";
import { useLogin } from "../mtc-api/auth/useLogin";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useSendMagicLink } from "../mtc-api/auth/useSendMagicLink";
import { useForgotPassword } from "../mtc-api/auth/useResetPassword";
import Modal from "../components/Modal";

const getErrorTitle = (e) => {
  if (e?.response?.data?.code == 'ACCOUNT_NOT_CREATED') {
    return 'Email sent';
  }
  return 'Error';
};

// noinspection JSUnusedGlobalSymbols
export default function Login() {
  const router = useRouter();

  const [, setCookie] = useCookies([
    'token',
    'paypalId',
    'nonprofitOnboardingFinished',
  ]);

  const [modalInfo, setModalInfo] = useState<{type, title, body}>();

  const sendMagicLink = useSendMagicLink({
    onSuccess: () => {
      setModalInfo({
        type: "info",
        title: 'Email sent',
        body: `Magic link has been sent to: ${email}`,
      });
    },
    onError: (e) => {
      setModalInfo({
        type: "error",
        title: getErrorTitle(e),
        body:
          e?.response?.data?.message ||
          'Oops there was an error ! Please try again',
      });
    },
  });

  const forgotPassword = useForgotPassword({
    onSuccess: () => {
      setModalInfo({
        type: "info",
        title: 'Email sent',
        body: `Reset password link has been sent to: ${email}`,
      });
    },
    onError: (e) => {
      setModalInfo({
        type: "error",
        title: getErrorTitle(e),
        body:
          e?.response?.data?.message ||
          'Oops there was an error ! Please try again',
      });
    },
  });

  const login = useLogin({
    onSuccess: ({ data }) => {
      setCookie('token', data.jwt, { path: '/' });
      setCookie('paypalId', data.user.paypalId, { path: '/' });
      setCookie(
        'nonprofitOnboardingFinished',
        data.user.nonprofitOnboardingFinished ? 1 : 0,
        { path: '/' },
      );

      if (data.user.nonprofitOnboardingFinished) {
        router.push('/admin/editview');
        return;
      }
      router.push('/admin/nonprofit');
    },
    onError: (e) => {
      if (e?.response?.data?.code == 'ACCOUNT_NOT_CREATED') {
        setModalInfo({
          type: "error",
          title: getErrorTitle(e),
          body:
            e?.response?.data?.message ||
            'Oops there was an error ! Please try again',
        });
        return;
      }
      setModalInfo({
        type: "error",
        title: undefined,
        body: e?.response?.data?.message || 'Oops there was an error! Please try again',
      });
    },
  });

  const [canLogin, setCanLogin] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    setEmailValid(isEmailValid);
    setCanLogin(!!isEmailValid && !!password);
    setCanLogin(!!isEmailValid && !!password);
  }, [email, password])

  const handleLogin = () => {
    setModalInfo(undefined);
    // @ts-ignore
    login.mutate({
      provider: 'EMAIL',
      email,
      password,
    });
  };

  const handleForgotPassword = () => {
    if (isEmailValid && !sendMagicLink.isLoading) {
      setModalInfo(undefined);
      // @ts-ignore
      forgotPassword.mutate({ email });
    }
  };

  const handleRequestMagicLink = () => {
    if (!isEmailValid) return;
    if (!sendMagicLink.isLoading) {
      setModalInfo(undefined);
      // @ts-ignore
      sendMagicLink.mutate({ email });
    }
  };

  return (
    <div className="w-full min-w-320px">
      <TopNav onSearch={(searchValue) => window.alert(searchValue)} />

      <div
        id="login"
        className="
          t:pt-101px pt-80px
          flex flex-col t:flex-row items-center justify-center"
      >
        <div className="
          flex flex-col t:flex-row items-center t:gap-30px t:pr-30px
          t:shadow-0-5-15 t:rounded-50px"
        >
          <div className="t:w-473px t:max-h-578px">
            <Image
              src="/images/login/login.png"
              width={473}
              height={578}
            />
          </div>
          <div>
            <form className="flex flex-col t:max-w-413px">
              <div className="t:text-13px t:leading-18px t:text-gray-500">
                Free of charge
              </div>
              <div className="t:text-38px t:leading-57px t:font-black t:pb-64px">
                Log in to account 🗝
              </div>

              <div className="t:pb-39px">
                <Input
                  className="max-w-423px"
                  placeholder="Email address"
                  type="email"
                  // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  onChange={setEmail}
                  prefix={<img
                    className="ml-6px"
                    src={"/images/login/icon-email.svg"}
                  />}
                />
              </div>

              <div className="t:pb-45px">
                <Input
                  className="max-w-423px"
                  placeholder="Password"
                  type={isShowPassword ? "text" : "password"}
                  onChange={setPassword}
                  prefix={<img
                    className="ml-6px"
                    src={"/images/login/icon-password.svg"}
                  />}
                  suffix={<img
                    className="mr-6px" src="/images/login/icon-eye-closed.svg"
                    onClick={() => setShowPassword(previousValue => !previousValue)}
                  />}
                />
              </div>

              <div className="flex flex-row items-center t:gap-20px">
                <Button
                  className="t:max-w-93px text-14px leading-17px t:max-h-46px"
                  disabled={!canLogin}
                  onClick={handleLogin}
                >
                  Login 🗝
                </Button>
                <a
                  className={`t:text-14px t:leading-21px underline
                    ${isEmailValid ? "cursor-pointer text-primary-500" : "cursor-not-allowed text-gray-300"}`}
                  onClick={handleRequestMagicLink}
                >
                  Send me the magic link 🔗
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalInfo && (
        <Modal
          header={modalInfo.title}
          footer={
            <Button onClick={() => setModalInfo(undefined)} className={`w-full`}>
              OK
            </Button>
          }
        >
          {modalInfo.body}
        </Modal>
      )}
    </div>
  );
}
