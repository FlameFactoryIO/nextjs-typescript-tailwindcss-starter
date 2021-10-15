import VideoPlayer from "./VideoPlayer";
import { PlayOneVideoAtOnceProvider } from "./PlayOneVideoAtOnceContext";
import { FullScreenProvider } from "./FullScreenContext";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Video Player",
  component: VideoPlayer,
  decorators: [
    (Story) => (
      <FullScreenProvider>
        <PlayOneVideoAtOnceProvider>
          <Story />
        </PlayOneVideoAtOnceProvider>
      </FullScreenProvider>
    ),
  ],
  args: {
    // videoImage: "https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,gravity=auto,dpr=1/https://mtc-media-staging.s3.us-east-2.amazonaws.com/Group%20114-min.jpg",
    videoUrl: "https://mtc-media-staging.s3.us-east-2.amazonaws.com/mtc_video.mp4",
    presentOverlay: true,
  }
};

const Template = (arguments_) => <VideoPlayer {...arguments_} />;

// noinspection JSUnusedGlobalSymbols
export const Primary = Template.bind({});

// noinspection JSUnusedGlobalSymbols
export const PlayOnlyOneVideoAtOnce = (arguments_) => (
  <>
    <VideoPlayer {...arguments_} />
    <VideoPlayer
      videoImage="https://movethechain.com/cdn-cgi/image/format=auto,metadata=none,sharpen=1,fit=scale-down,q=75,dpr=1/https://cdn.movethechain.com/image/c1cc71f7-db40-4a8c-842e-dd23a87db7e3.jpg"
      videoUrl="https://cdn.movethechain.com/video/0/b7/457/0b770c57c5e1fe440c0ae43f10c38447.mp4"
    />
  </>
)
