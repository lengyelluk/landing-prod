import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { HeroSuccess } from './HeroSuccess';
import { VerticalFeatureSuccess } from './VerticalFeatureSuccess';

const Success = () => (
  <div className="antialiased text-gray-600">
    <Meta
      title={AppConfig.success_title}
      description={AppConfig.success_description}
    />
    <HeroSuccess />
    <VerticalFeatureSuccess />
    <Footer />
  </div>
);

export { Success };
