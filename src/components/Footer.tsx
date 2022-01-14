import Link from 'next/link';
import styled, { css } from 'styled-components';

const Root = styled.footer`
  &,
  a {
    color: #fff;
  }
`;

const displayGrid = css`
  display: grid;
`;

const position = css`
  position: relative;
`;

const TopPart = styled.div`
  ${position};
  max-width: 150rem;
  ${displayGrid}
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  padding: 8rem 10%;
  margin: 0 auto;
  background: #48c4a0;

  @media only screen and (max-width: 45.625em) {
    padding: 8rem 5%;
  }

  @media only screen and (max-width: 41.25em) {
    gap: 3rem;
    padding: 4rem 5%;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const fontWeight = css`
  font-weight: 500;
`;

const SiteTitle = styled.p`
  font-size: 4.5rem;
  ${fontWeight}
  margin: -1rem 0 2.5rem 0;
`;

const textStyles = css`
  font-size: 1.9rem;
`;

const Text = styled.p`
  ${textStyles}
`;

const letterSpacing = css`
  letter-spacing: 1px;
`;

const Description = styled.p`
  ${textStyles}
  ${letterSpacing}
  line-height: 1.5;
`;

const Title = styled.p`
  ${position}
  font-size: 2rem;
  ${fontWeight}
  text-transform: uppercase;
  padding-bottom: 1rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 37.5em) {
    margin-bottom: 1.5rem;
  }
`;

const Border = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 22%;
  height: 3px;
  background: currentColor;
  border-radius: 2px;
`;

const List = styled.ul`
  ${displayGrid}
  gap: 2.5rem;
`;

const ListItem = styled.li`
  display: flex;
`;

const Socials = styled.div`
  ${displayGrid}
  grid-auto-flow: column;
  gap: 2rem;
`;

const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: currentColor;
  margin-right: 1.2rem;
`;

const BottomPart = styled.div`
  text-align: center;
  padding: 13rem 2rem 6rem;
  margin-top: -7rem;
  color: #6f6f6f;
  background: #f6f6f6;

  p {
    font-size: 1.8rem;
    line-height: 1.6;
    ${letterSpacing}
  }

  a {
    color: var(--accent-color);
  }
`;

const Footer = () => {
  return (
    <Root>
      {/* Top part */}
      <TopPart>
        <div>
          {/* Site title */}
          <SiteTitle>Shopnik.</SiteTitle>

          {/* Description */}
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            modi libero tempore saepe ipsum? Maiores sit enim velit, quia
            accusantium exercitationem ipsa.
          </Description>
        </div>

        <div>
          {/* Title */}
          <Title>
            Contact Us
            <Border />
          </Title>

          <List>
            {/* Phone */}
            <ListItem>
              {/* Icon */}
              <Icon>
                <use href="/phone.svg#icon" />
              </Icon>

              {/* Text */}
              <Text>(+88) 1234 5677898</Text>
            </ListItem>

            {/* Email */}
            <ListItem>
              {/* Icon */}
              <Icon>
                <use href="/mail.svg#icon" />
              </Icon>

              {/* Text */}
              <Text>shopnik@gmail.com</Text>
            </ListItem>

            {/* Address */}
            <ListItem>
              {/* Icon */}
              <Icon>
                <use href="/map.svg#icon" />
              </Icon>

              {/* Text */}
              <Text>469 Hog Camp Road, Illinois</Text>
            </ListItem>

            {/* Socials */}
            <ListItem>
              <Socials>
                {/* Facebook */}
                <Link href="https://facebook.com/shopnik">
                  <a target="__blank">
                    <Icon>
                      <use href="/facebook.svg#icon" />
                    </Icon>
                  </a>
                </Link>

                {/* Twitter */}
                <Link href="https://twitter.com/shopnik">
                  <a target="__blank">
                    <Icon>
                      <use href="/twitter.svg#icon" />
                    </Icon>
                  </a>
                </Link>

                {/* Linkedin */}
                <Link href="https://linkedin.com/in/shopnik">
                  <a target="__blank">
                    <Icon>
                      <use href="/linkedin.svg#icon" />
                    </Icon>
                  </a>
                </Link>

                {/* Instagram */}
                <Link href="https://instagram.com/shopnik">
                  <a target="__blank">
                    <Icon>
                      <use href="/instagram.svg#icon" />
                    </Icon>
                  </a>
                </Link>
              </Socials>
            </ListItem>
          </List>
        </div>

        <div>
          {/* Title */}
          <Title>
            Useful Links
            <Border />
          </Title>

          <List>
            <ListItem>
              <Link href="/contact" passHref>
                <a>
                  <Text>Contact us</Text>
                </a>
              </Link>
            </ListItem>
          </List>
        </div>
      </TopPart>

      {/* Bottom part */}
      <BottomPart>
        <p>
          &copy; Shopnik. By&nbsp;
          <a href="https://findmomin.vercel.app" target="__blank">
            Abdul Momin.&nbsp;
          </a>
          All Rights Reserved {new Date().getFullYear()}.
        </p>
      </BottomPart>
    </Root>
  );
};

export default Footer;
