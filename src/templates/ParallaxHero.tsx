import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { Parallax } from 'react-parallax';

const ParallaxHero = () => (
  <Background color="bg-blue-400">
      <div className="flex items-center justify-center">
        <img src="/assets/images/logo_transparent.png" className="h-screen object-scale-down" />
    </div>
    </Background>
   
)

export { ParallaxHero };
