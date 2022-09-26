import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({textOnLeft = false}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const statistics = [
    {
      key: "Students",
      value: "450",
    },
    {
      key: "Institutes",
      value: "75",
    },
    {
      key: "Scholarships",
      value: "205",
    },
    {
      key: "Fellowships",
      value: "105",
    }
  ]

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="https://media.istockphoto.com/photos/college-cost-student-loan-scholarship-graduate-cap-on-dollar-3d-picture-id1358219896?b=1&k=20&m=1358219896&s=170667a&w=0&h=M-Yp7UrdtfSbcNPAEeSz6xv6ibIm81hQOvwJEklPXFI=" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>Find your Desired Scholarships</Heading>
            <Description>ScholarLance aims at bridging the gap between institutes and students who are willing to get scholarships. It is a common destiination where different institutes can showcase their scholarship schemes and students can apply for the same.</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
              <Statistic key={index}>
                <Value>{statistic.value}</Value>
                <Key>{statistic.key}</Key>
              </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
