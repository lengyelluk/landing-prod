import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatureDuplicate = () => (
  <Section
    title="Tvoj email už máme!"
    description="Ďalšia registrácia emailu nie je potrebná. Hneď ako začne predpredaj Slovenskej digitálnej koruny, dostaneš daľšie informácie. Ďakujeme!"
  >
    <VerticalFeatureRow
        title="Sleduj náš Facebook a Instagram"
        description="Buď v centre diania a dozvieš sa aktuálne informácie priamo od tímu Slovenskej digitálnej koruny."
        image="/assets/images/feature3.svg"
        imageAlt="Second feature alt text"
      />
  </Section>
);

export { VerticalFeatureDuplicate };
