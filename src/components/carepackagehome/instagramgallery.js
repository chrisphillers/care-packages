import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import instafeed from "instafeed-lite";

const localData = {
  lowerInfo: {
    title: "Follow our updates @uk.care.packages",
    sub_title: "",
    posts: [
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/98109208_248639346557335_5024508482649666703_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MpL9rWqaDX4AX_3t_IE&oh=17fe5450a120e1613f2e321ea4bdcee2&oe=5EFAC3F1",
        url: "https://www.instagram.com/p/CAYF6wypQKg/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/97095473_141905360748800_3701558077505645191_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=wik4w8MDnS0AX8tJedi&oh=5124d945e5bc001b17ffc73280f1001d&oe=5EFDEC55",
        url: "https://www.instagram.com/p/CATLC1dp5MK/",
      },
      {
        image:
          "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96892244_288556082306465_2205541088459621533_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=7H5yZ6oT5CMAX_etpe6&oh=12908abba63f65f79b1053e2b85dc531&oe=5F007537",
        url: "https://www.instagram.com/p/CALez08phEj/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96404316_913769045733470_7646817301269513695_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=tWcfoWiHr9sAX9_tF8T&oh=727a09cb76028868dc4591c3fc0b68ff&oe=5EFFD85A",
        url: "https://www.instagram.com/p/CAIbfX0p_ww/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/96531676_658192394744380_6059137439307675195_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=IDGtoHMJIGEAX_xH8gV&oh=3a8f300f07fdd72b79e2d9a68b53a0ce&oe=5EFE1443",
        url: "https://www.instagram.com/p/CAF5dpFpUk9/",
      },
      {
        image:
          "https://scontent-frx5-1.cdninstagram.com/v/t50.2886-16/96054568_1336577496548050_8989679371716716672_n.mp4?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=110&_nc_ohc=IAAyVAN-TLcAX_VY9jL&oe=5ED83FF4&oh=fd53e59d7c1a7417816aae69a4543327",
        url: "https://www.instagram.com/p/CAF1vqyp5_3/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/98109208_248639346557335_5024508482649666703_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MpL9rWqaDX4AX_3t_IE&oh=17fe5450a120e1613f2e321ea4bdcee2&oe=5EFAC3F1",
        url: "https://www.instagram.com/p/CAYF6wypQKg/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/98109208_248639346557335_5024508482649666703_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MpL9rWqaDX4AX_3t_IE&oh=17fe5450a120e1613f2e321ea4bdcee2&oe=5EFAC3F1",
        url: "https://www.instagram.com/p/CAYF6wypQKg/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/98109208_248639346557335_5024508482649666703_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MpL9rWqaDX4AX_3t_IE&oh=17fe5450a120e1613f2e321ea4bdcee2&oe=5EFAC3F1",
        url: "https://www.instagram.com/p/CAYF6wypQKg/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/98109208_248639346557335_5024508482649666703_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MpL9rWqaDX4AX_3t_IE&oh=17fe5450a120e1613f2e321ea4bdcee2&oe=5EFAC3F1",
        url: "https://www.instagram.com/p/CAYF6wypQKg/",
      },
    ],
  },
};

export const InstaGallery = () => {
  const { title, sub_title, posts } = localData.lowerInfo;
  return (
    <LowerInfoContainer>
      <Title>{title}</Title>
      <Posts>
        {posts.slice(0, 4).map((post) => {
          return (
            <div>
              <a href={post.url}>
                <Post src={post.image}></Post>
              </a>
            </div>
          );
        })}
      </Posts>
    </LowerInfoContainer>
  );
};

export const LowerInfoContainer = styled.div`
  padding: 4rem 0;
  text-transform: capitalize;
  background: white;
`;
export const Posts = styled.div`
  > * > {
    flex: 1;
  }
`;
export const Title = styled.div`
  font-size: calc(20px + (35 - 20) * ((100vw - 300px) / (1920 - 300)));
  padding-bottom: 2rem;

  @media (min-width: 600px) {
    width: 70vw;
    min-width: 300px;
    margin: 0% auto;
  }

  @media (min-width: 800px) {
    padding: 1.4rem 0;
  }
  @media (min-width: 1025px) {
    width: 44vw;
    padding: 1.4rem 0;
  }

  @media (min-width: 1441px) {
    width: 55vw;
    margin: 0% auto;
  }
`;

export const Post = styled.img`
  width: 100%;
  height: auto;
  /* margin: 1rem; */
`;

export const Thanks = styled.div`
  text-transform: uppercase;
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (1920 - 300)));
  color: ${theme.brandPrimary};
`;
