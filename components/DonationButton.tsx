import { FC } from "react";
import Link from "next/link";
import Button from "./Button";
import { logEvent } from "../utils/analytics";
import { useRouter } from "next/router";

const DonateButton: FC<{
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  variant?: "primary" | "black" | "white",
  origin: string,
  nonprofitId: string,
  nonprofitName: string,
  postId?: number,
  entityType: string,
  entityId: string,
  campaignId?: number,
  challengeId?: number,
  challengeName?: string,
}> = ({
  children= "Donate now",
  className = "",
  disabled = false,
  variant = "primary",
  origin,
  nonprofitId,
  nonprofitName,
  entityType,
  entityId,
  campaignId,
  challengeId,
  challengeName,
  postId,
}) => {
  const router = useRouter();

  const buildDonationUrl = () => {
      const params = new URLSearchParams();
      params.set("amount", "0");
      params.set("checked", "0");
      params.set("nonprofitId", nonprofitId);
      params.set("nonprofitName", nonprofitName);
      params.set("originalPostId", "");
      if (challengeName) {
        params.set("challengeName", challengeName);
      }
      if (postId) {
        params.set("postId", postId.toString());
      }
      if (campaignId) {
        params.set("campaignId", campaignId.toString());
      }
      if (challengeId) {
        params.set("challengeId", challengeId.toString());
      }
      if (entityType && entityId) {
        params.set("redirectThanksPage", "1");
        params.set(
          "redirectUrl",
          `thanks?entityType=${encodeURIComponent(entityType)}&entityId=${encodeURIComponent(entityId)}&redirectUrl=${encodeURIComponent(router.pathname)}&action=donate`,
        );
      } else {
        params.set("redirectUrl", router.pathname);
      }
      return `/payment?${params}`;
  }

  return (
    <Link href={buildDonationUrl()} passHref>
      <div className={className}>
        <a onClick={() => { logEvent("Clicked Donate", { origin })}}>
          <Button
            variant={variant}
            type="button"
            disabled={disabled}
            className="w-full"
          >
            {children}
          </Button>
        </a>
      </div>
    </Link>
  );
}

export default DonateButton;
