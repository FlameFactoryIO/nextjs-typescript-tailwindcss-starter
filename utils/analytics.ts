// import { pick } from "rambda";
import TagManager from 'react-gtm-module';

const isBrowser = () => typeof window !== 'undefined';
let amplitudeInstance;

// const branchData = (data) => {
//   const fromLink = data.data_parsed['+clicked_branch_link'];
//
//   console.info(
//     'branch initialized',
//     data.data_parsed ? Object.keys(data.data_parsed).length : '',
//   );
//   if (fromLink) {
//     const props = pick(
//       [
//         'platformOrigin',
//         'challengeId',
//         'challengeName',
//         'nonprofitId',
//         'username',
//         'userId',
//         'creatorId',
//         'channel',
//         'campaignId',
//         'id',
//       ],
//       data.data_parsed,
//     );
//
//     const shareType = data.data_parsed['$canonical_identifier'];
//     if (shareType) {
//       // @ts-ignore
//       props.shareType = shareType;
//     }
//
//     logEvent('Link Clicked', props);
//   }
// };
//
// const loadBranch = () => {
//   (function (b, r, a, n, c, h, _, s, d, k) {
//     if (!b[n] || !b[n]._q) {
//       for (; s < _.length; ) c(h, _[s++]);
//       d = r.createElement(a);
//       d.async = 1;
//       d.src = 'https://cdn.branch.io/branch-latest.min.js';
//       k = r.getElementsByTagName(a)[0];
//       k.parentNode.insertBefore(d, k);
//       b[n] = h;
//     }
//   })(
//     window,
//     document,
//     'script',
//     'branch',
//     function (b, r) {
//       b[r] = function () {
//         b._q.push([r, arguments]);
//       };
//     },
//     { _q: [], _v: 1 },
//     'addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking'.split(
//       ' ',
//     ),
//     0,
//   );
//   // @ts-ignore
//   branch.init(process.env.NEXT_PUBLIC_BRANCH_KEY, function (err, data) {
//     branchData(data);
//   });
//
//   //this may be needed for deferred linking?
//   // branch.data(function (err, data) {
//   //   console.log('branch data', err);
//   //   branchData(data);
//   // });
// };

const initialize = () => {
  TagManager.initialize({
    gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG,
  });

  // if (!amplitudeInstance) {
  //   const amplitude = require('amplitude-js');
  //   amplitudeInstance = amplitude.getInstance('instance');
  //   amplitudeInstance.init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY); // initializes named instance of Amplitude client
  //
  //   loadBranch();
  // }
};

const logEvent = (eventName, props) => {
  if (isBrowser()) {
    if (!amplitudeInstance) {
      initialize();
    }

    return amplitudeInstance.logEvent(eventName, props);
  } else {
    console.info(
      'logging an event from the server side is not supported',
      eventName,
    );
  }
};

export { initialize, logEvent };
