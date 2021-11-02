import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatureSuccess = () => (
  <>
    <Section
      title="Registrácia prebehla v poriadku!"
      description="Hneď ako začne predpredaj Slovenskej digitálnej koruny, dostanete od nás daľšie informácie. Ďakujeme!">
      <VerticalFeatureRow
        title="Sledujte náš Facebook a Twitter"
        description="Buďte v centre diania a získajte aktuálne informácie priamo od tímu Slovenskej digitálnej koruny."
        image="/assets/images/feature3.svg"
        imageAlt="Second feature alt text"
      />
    </Section>
  </>
  );

export { VerticalFeatureSuccess };
