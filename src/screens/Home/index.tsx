import React from 'react';
import {ScrollView} from 'react-native';
import {
  Display1,
  Display2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HeadingMobile,
  LeadParagraph,
  Paragraph,
  ParagraphMobile,
  BodyLarge,
  BodyMedium,
  BodySmall,
  Caption,
} from '../../GlobalStyles';

export default function Home() {
  return (
    <>
      <ScrollView>
        <Display1>Display1</Display1>
        <Display2>Display2</Display2>
        <Heading1>Heading1</Heading1>
        <Heading2>Heading2</Heading2>
        <Heading3>Heading3</Heading3>
        <Heading4>Heading4</Heading4>
        <Heading5>Heading5</Heading5>
        <Heading6>Heading6</Heading6>
        <HeadingMobile>HeadingMobile</HeadingMobile>
        <LeadParagraph>LeadParagraph</LeadParagraph>
        <Paragraph>Paragraph</Paragraph>
        <ParagraphMobile>ParagraphMobile</ParagraphMobile>
        <BodyLarge>BodyLarge</BodyLarge>
        <BodyMedium>BodyMedium</BodyMedium>
        <BodySmall>BodySmall</BodySmall>
        <Caption>Caption</Caption>
      </ScrollView>
    </>
  );
}
