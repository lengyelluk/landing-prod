import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { ParallaxHero } from './ParallaxHero';

const Hero = () => (
  <>
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.facebook.com/Slovensk%C3%A1-digit%C3%A1lna-koruna-100299555755953">
            <a target="_blank">Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/DigitalnaKoruna">
            <a target="_blank">Twitter</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
  <ParallaxHero />
  </>
);

export { Hero };
