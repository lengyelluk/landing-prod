import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatureDuplicate = () => (
  <Section
    title="Váš email už máme!"
    description="Ďalšia registrácia emailu nie je potrebná. Hneď ako začne predpredaj Slovenskej digitálnej koruny, dostanete daľšie informácie. Ďakujeme!"
  >
    <VerticalFeatureRow
        title="Sledujte náš Facebook a Twitter"
        description="Buďte v centre diania a získajte aktuálne informácie priamo od tímu Slovenskej digitálnej koruny."
        image="/assets/images/feature3.svg"
        imageAlt="Second feature alt text"
      />
  </Section>
);

export { VerticalFeatureDuplicate };
