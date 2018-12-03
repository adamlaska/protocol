import * as _ from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

import { colors } from 'ts/style/colors';

import { Button } from 'ts/@next/components/button';
import { Column, Section, Wrap } from 'ts/@next/components/layout';
import { Logo } from 'ts/@next/components/logo';
import { NewsletterForm } from 'ts/@next/components/newsletterForm';

interface FooterInterface {
}

interface LinkInterface {
    text: string;
    url: string;
    newWindow?: boolean;
}

interface LinkRows {
    heading: string;
    links: LinkInterface[];
}

interface LinkListProps {
    links: LinkInterface[];
}

const linkRows: LinkRows[] = [
    {
        heading: 'Products',
        links: [
            { url: '/next/0x-instant', text: '0x Instant' },
            { url: '#', text: '0x Launch Kit' },
        ],
    },
    {
        heading: 'About',
        links: [
            { url: '#', text: 'Mission' },
            { url: '#', text: 'Team' },
            { url: '#', text: 'Jobs' },
            { url: '#', text: 'Press Kit' },
        ],
    },
    {
        heading: 'Community',
        links: [
            { url: '#', text: 'Twitter' },
            { url: '#', text: 'Rocket Chat' },
            { url: '#', text: 'Facebook' },
            { url: '#', text: 'Reddit' },
        ],
    },
];

export const Footer: React.StatelessComponent<FooterInterface> = ({}) => (
  <FooterWrap
    bgColor="#181818"
    noMargin>
    <Wrap>
      <Column colWidth="1/2" isNoPadding={true}>
        <Logo light />
        <NewsletterForm />
      </Column>

      <Column colWidth="1/2" isNoPadding={true}>
        <Wrap>
          {_.map(linkRows, (row, index) => (
            <Column
              key={`fc-${index}`}
              colWidth="1/3"
              isNoPadding={true}>
              <RowHeading>
                { row.heading }
              </RowHeading>

              <LinkList links={row.links} />
            </Column>
          ))}
        </Wrap>
      </Column>
    </Wrap>
  </FooterWrap>
);

const LinkList = (props: LinkListProps) => (
  <ul>
    {_.map(props.links, (link, index) => (
      <li key={`fl-${index}`}>
        <Link to={link.url}>
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

const FooterSection = Section.withComponent('footer');
const FooterWrap = styled(FooterSection)`
    color: ${colors.white};
`;

const RowHeading = styled.h3`
    color: ${colors.white};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 1.25em;
`;

const Link = styled(ReactRouterLink)`
    color: rgba(255, 255, 255, 0.5);
    display: block;
    font-size: 16px;
    line-height: 20px;
    transition: color 0.25s ease-in-out;
    text-decoration: none;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;
