import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";

import { SiteSiteMetadataAuthor } from "graphql-types";
import { rhythm } from "../../utils/typography";
import { yearsSince } from "../../utils/timeSince";
import { device } from "../../styles/constants";
import { useAvatar } from "../../hooks";

interface AboutProps {
  author: SiteSiteMetadataAuthor;
}

const About: React.FunctionComponent<AboutProps> = ({
  author,
}): React.ReactElement => {
  const avatar = useAvatar({ width: 200, height: 200 });

  return (
    <Root>
      <Avatar fixed={avatar.childImageSharp.fixed as FixedObject} />

      <Description>
        <h4>Hey!</h4>
        <p>
          My name is {author.firstname}! I'm just an average guy who loves to do things and talk about things. I enjoy traveling, meeting people and sharing meal with them. I am a wannabe whiskey connoisseur and enjoy an occasional cigar with it. When I'm not stuffing my face, I love to go out into the wild and spend time camping, hiking, fishing and just about any "survivalist" type activity.
        </p>

        <p>
          Although I frequent the above activities, on an average day, most of my time is spent <i>Risk and Analytics Specialist</i> at an insurance company and serving at my home church.
        </p>

        <p>
          If you would like to get to know more about me, please feel free to email me at{" "}
          <strong>{author.social.email}</strong> or reach out to me on one of the social media channels listed below.
        </p>
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-gap: ${rhythm(2)};
  margin-top: ${rhythm(0.5)};

  @media ${device.tablet} {
    grid-template-columns: minmax(20%, 200px) 70%;
  }
`;

const Avatar = styled(Image)`
  align-self: center;

  border-radius: 50%;
  width: 150px;
  height: 150px;
  justify-self: center;
  align-self: flex-start;

  @media ${device.tablet} {
    width: auto;
    height: auto;
    justify-self: start;
  }
`;

const Description = styled.section`
  h4 {
    margin-top: ${rhythm(0.5)};
  }
`;

export default About;
