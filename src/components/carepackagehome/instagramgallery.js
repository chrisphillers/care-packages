import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import instafeed from "instafeed-lite";
import Instagram from "../../../content/assets/svgs/instagram.svg";
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
          "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/p480x480/96358860_918261308619781_7571877121318044639_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=Ck9QAg3QsCwAX9gIuBd&oh=2c545e4ed60c1de1db5483277952422f&oe=5EDE1913",
        url: "https://www.instagram.com/p/CAF1vqyp5_3/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/98109208_248639346557335_5024508482649666703_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MpL9rWqaDX4AX_3t_IE&oh=17fe5450a120e1613f2e321ea4bdcee2&oe=5EFAC3F1",
        url: "https://www.instagram.com/p/CAYF6wypQKg/",
      },
      {
        image:
          "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/c120.0.716.716a/s320x320/97198571_1037979119931567_1032255416873476495_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=XDWtZxf2pB8AX9wtubj&oh=166f949edd287ace5bb486d4fedd7b9d&oe=5F064CF9",
        url: "https://www.instagram.com/p/CAFyAwiJSKa/",
      },
      {
        image:
          "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/96419062_560983741224295_5141353574567235916_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=HTkCsDmOBdcAX8Fkk7N&oh=beccacab237aaaca954b314cfba6e4cf&oe=5F06452E",
        url: "https://www.instagram.com/p/CAFxHk7pJ6k/",
      },
    ],
  },
};

export const InstaGallery = () => {
  const { title, sub_title, posts } = localData.lowerInfo;
  const [postSlice, setPostSlice] = React.useState(null);

  React.useEffect(() => {
    if (localData.lowerInfo)
      window.innerWidth > 767
        ? setPostSlice(localData.lowerInfo.posts)
        : setPostSlice(localData.lowerInfo.posts.slice(0, 3));
  }, [postSlice]);
  return (
    <LowerInfoContainer>
      <TitleArea href="https://www.instagram.com/uk.care.packages/">
        <Instagram height="2em"></Instagram>
        <Title>{title}</Title>
      </TitleArea>
      <Posts>
        {postSlice?.map((post) => {
          return (
            <PostWrap>
              <a href={post.url}>
                <Post src={post.image}></Post>
              </a>
            </PostWrap>
          );
        })}
      </Posts>
    </LowerInfoContainer>
  );
};

export const TitleArea = styled.a`
  cursor: pointer;
`;

export const LowerInfoContainer = styled.div`
  padding: 4rem 0;
  text-transform: capitalize;
  background: white;
`;
export const Posts = styled.div`
  padding: 2rem;

  /* > * > {
    flex: 1;
  } */
  @media (min-width: 767px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const Title = styled.div`
  font-size: calc(20px + (24 - 20) * ((100vw - 300px) / (1920 - 300)));
  /* padding-bottom: 1rem; */
  padding: 0 1rem;
  line-height: 2rem;
  color: ${theme.brandPrimary};
  text-decoration: none;
  :hover {
    font-weight: 500;
  }
  :visited {
    text-decoration: none;
  }

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
  /* height: auto; */
  padding-top: 1rem;
  /* margin: 1rem; */
  :hover {
    opacity: 0.7;
    /* margin: 1rem; */
  }

  @media (min-width: 767px) {
    /* width: initial; */
    /* width: 300px; */
    /* height: 300px; */
    /* overflow: hidden; */
  }
`;

export const PostWrap = styled.div`
  overflow: hidden;
  width: 100%;

  /* height: auto; */

  @media (min-width: 767px) {
    width: 300px;
    height: 300px;
    padding: 1rem;
  }
`;

export const Thanks = styled.div`
  text-transform: uppercase;
  font-size: calc(14px + (19 - 14) * ((100vw - 300px) / (1920 - 300)));
  color: ${theme.brandPrimary};
`;
