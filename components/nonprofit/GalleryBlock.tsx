import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import Head from "next/head";
import { Block, EmptyBlock } from "./Block";
import { GalleryIcon } from "./Icons";
import Modal from "../Modal";
import Button from "../Button";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import VideoPlayer from "../VideoPlayer";

const GalleryBlock = ({nonprofit, ownsNonprofit}: {nonprofit: Nonprofit, ownsNonprofit: boolean}) => {
  const [isEditorOpen, setEditorOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] =
    useKeenSlider<HTMLDivElement>({
      // initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide);
      },
      loop: true,
      mode: "snap",
    });

  const handleSave = (
  ) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setEditorOpen(false);
    }
  };

  if (!nonprofit?.impact) {
    if (!ownsNonprofit) {
      return null;
    }

    return (
      <EmptyBlock
        icon={<GalleryIcon />}
        text={
          <>
            <span className="font-bold">
              Upload and make an awesome gallery
            </span>
            <br />
            and include text if you want.
          </>
        }
        actionText="Add gallery"
        onClick={() => setEditorOpen(true)}
      />
    );
  }

  console.debug({impact: nonprofit.impact})

  return (
    <Block className="overflow-hidden">
      <Head>
        <title>Move the Chain</title>
        <style type="text/css">
          {`
          .dots {
            display: flex;
            padding: 10px 0;
            justify-content: center;
          }
  
          .dot {
            border: none;
            width: 10px;
            height: 10px;
            background: #c5c5c5;
            border-radius: 50%;
            margin: 0 5px;
            padding: 5px;
            cursor: pointer;
          }
  
          .dot:focus {
            outline: none;
          }
  
          .dot.active {
            background: #000;
          }
        `}
        </style>
      </Head>

      <div className="keen-slider" ref={sliderRef}>
        {Object.values(nonprofit.impact).map((m) => (
          <div key={m.id} className="keen-slider__slide flex items-center justify-center">
            {m.videoUrl && m.type === 'VIDEO' ? (
              <VideoPlayer
                // className="absolute top-0 left-0 right-0 bottom-0 min-h-auto min-w-auto object-contain"
                videoUrl={m.videoUrl}
                videoImage={m.imageUrl}
                presentOverlay
              />
            ) : (m.imageUrl || m.text) ? (
              <>
                {m.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    // className="object-contain rounded-10px overflow-hidden"
                    src={m.imageUrl}
                    alt=""
                  />
                )}
                {m.text && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-stretch">
                    <div
                      className={'relative flex break-words w-full overflow-auto'}
                      style={{
                        backgroundColor: m.imageUrl ? 'transparent' : m.backgroundHexColor,
                        alignItems: verticalAlign[m.verticalTextAlign],
                        textShadow: 'rgb(0 0 0 / 20%) 0px 2px 7px',
                      }}
                    >
                      <div
                        style={{
                          textAlign: m.textAlign,
                          fontSize: fontSizes[m.textSize],
                          color: m.textHexColor,
                        }}
                        dangerouslySetInnerHTML={{ __html: m.text }}
                      />
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </div>
        ))}
      </div>

      <div className="dots">
        {slider && [
          ...Array.from(Array(slider.details().size).keys()),
        ].map((idx) => {
          return (
            <button
              key={idx}
              onClick={() => { slider.moveToSlideRelative(idx) }}
              className={`dot ${currentSlide === idx ? "active" : ""}`}
            />
          );
        })}
      </div>

      {isEditorOpen && (
        <Modal
          header="Update your gallery"
          onClose={() => setEditorOpen(false)}
          footer={<Button onClick={handleSave}>Save</Button>}
        >
          <div className="flex flex-col p-20px">
            GALLERY EDITOR
          </div>
        </Modal>
      )}
    </Block>
  );
};

export default GalleryBlock;

export const fontSizes = {
  tiny: '14px',
  small: '16px',
  medium: '20px',
  large: '24px',
  xlarge: '36px',
};

export const verticalAlign = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};
