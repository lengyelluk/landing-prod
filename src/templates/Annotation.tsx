import { LeftAnnotation } from '../annotation/LeftAnnotation';
import { Section } from '../layout/Section';

const Annotation = () => (
    <Section>
      <div className="pb-1">Zdroje:</div>
        <LeftAnnotation order="1" text="Pri priemernej miere inflácie 5% po dobu 13 rokov: x * (1-0.05)¹³"/>
        <LeftAnnotation order="2" text="Rada guvernérov ECB" link="https://www.ecb.europa.eu/ecb/orga/decisions/govc/html/index.sk.html" />
        <LeftAnnotation order="3" text="Rotácie hlasovacích práv v Rade guvernérov ECB" link="https://www.ecb.europa.eu/explainers/tell-me-more/html/voting-rotation.sk.html" />
        <LeftAnnotation order="4" text="Should the ECB publish its minutes?" link="https://voxeu.org/article/should-ecb-minutes-be-published" />
        <LeftAnnotation order="5" text="Krajiny eurozóny" link="https://europa.eu/european-union/about-eu/euro/which-countries-use-euro_sk" />
        <LeftAnnotation order="6" text="Zdroj dát indexy cien a aktíva ECB - Eurostat" link="https://ec.europa.eu/eurostat" />
        <LeftAnnotation order="7" text="Zdroj dát kurzy BTC a ETH - CoinGecko" link="https://www.coingecko.com" />
    </Section>
);

export { Annotation };
