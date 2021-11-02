import MobileDetect from 'mobile-detect';

export const twitterShare = ({ url, text }) => {
  window.open(`https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
};

export const facebookShare = ({ url, text }) => {
  window.open(`https://www.facebook.com/sharer/sharer.php?display=page&u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`);
};

// https://stackoverflow.com/a/61583095
export const linkedInShare = ({ url, text }) => {
  const isMobileDevice = /Mobi/i.test(window.navigator?.userAgent);
  const linkedinUrl = isMobileDevice
    ? 'https://www.linkedin.com/shareArticle'
    : 'https://www.linkedin.com/sharing/share-offsite/';
  const shareUrl = `${linkedinUrl}?url=${url.replace('http://', 'https://')}`;
  window.open(
    shareUrl,
    'linkedinwindow',
    'left=20,top=20,width=600,height=700,toolbar=0,resizable=1',
  );
};

export const emailShare = ({ subject, body }) => {
  document.location.href = `mailto:?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body).replace(/\n/g, '\n%0D%0A')}`;
};

export const smsShare = ({ text, number = '' }) => {
  const isAndroid =
    !!window &&
    new MobileDetect(window.navigator.userAgent).os() === 'AndroidOS';
  document.location.href = isAndroid
    ? `sms:?body=${encodeURIComponent(text)}`
    : `sms:&body=${encodeURIComponent(text)}`;
};
