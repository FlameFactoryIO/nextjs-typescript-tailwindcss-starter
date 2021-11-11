import React, { FC, useState } from "react";
import Head from "next/head";
import Masonry from "react-masonry-css";

const MasonryList: FC = ({ children }) => {
  return (
    <>
      <Head>
        <style type="text/css">
          {`
            .my-masonry-grid {
              display: flex;
              width: auto;
            }
            .my-masonry-grid_column {
              background-clip: padding-box;
            }

            /* Style your items */
            .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
              margin-bottom: 15px;
            }
            
            @media screen and (min-width: 768px) {
              .my-masonry-grid_column:nth-child(odd) {
                margin-right: 7.5px;
              }
              .my-masonry-grid_column:nth-child(even) {
                margin-left: 7.5px;
              }
            }
          `}
        </style>
      </Head>

      <Masonry
        breakpointCols={{
          default: 2,
          767: 1,
        }}
        className="w-full my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </>
  );
};

export default MasonryList;
