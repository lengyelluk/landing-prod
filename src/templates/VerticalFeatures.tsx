import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const data1 = {
  graphTitle: 'Ceny výrobcov prudko rastú, čaká nás budúci rast výdavkov spotrebiteľov',
  graphDescription: 'Okolité krajiny s vlastnou menovou politikou môžu zvyšovať sadzby, aby spomalili rast cien. ECB pokračuje v tlaku na rast cien, len aby neublížila zadlženým krajinám. Slováci si tak za svoje eurá kúpia menej. (Pozn.: index cien v roku 2015 = 100)',
  source: 'Zdroj: Ekonomický tím Slovenskej digitálnej koruny na základe údajov OECD',
  labels: ["1/2015","2/2015","3/2015","4/2015","5/2015","6/2015","7/2015","8/2015","9/2015","10/2015","11/2015","12/2015","1/2016","2/2016","3/2016","4/2016","5/2016","6/2016","7/2016","8/2016","9/2016","10/2016","11/2016","12/2016","1/2017","2/2017","3/2017","4/2017","5/2017","6/2017","7/2017","8/2017","9/2017","10/2017","11/2017","12/2017","1/2018","2/2018","3/2018","4/2018","5/2018","6/2018","7/2018","8/2018","9/2018","10/2018","11/2018","12/2018","1/2019","2/2019","3/2019","4/2019","5/2019","6/2019","7/2019","8/2019","9/2019","10/2019","11/2019","12/2019","1/2020","2/2020","3/2020","4/2020","5/2020","6/2020","7/2020","8/2020","9/2020","10/2020","11/2020","12/2020","1/2021","2/2021","3/2021","4/2021","5/2021","6/2021","7/2021","8/2021"],
  datasets: [
    {
      label: 'Slovensko',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [99.7,99.4,100.4,100.4,101.3,101.2,100.9,100.4,99.8,99.4,98.9,98.4,97.5,95.9,95.7,96.0,96.3,96.8,96.9,96.2,96.6,96.9,97.2,97.3,98.8,99.1,99.8,99.8,99.6,99.5,98.9,99.1,99.0,99.1,99.6,99.1,99.3,99.5,99.6,99.8,100.1,100.5,100.9,101.6,101.5,102.0,101.4,100.6,100.9,100.6,101.6,101.7,102.3,102.4,101.8,102.0,101.8,102.4,101.3,101.4,102.2,102.4,102.1,100.0,99.5,99.5,99.3,99.6,99.2,99.4,99.0,99.7,99.9,101.2,102.7,103.3,105.0,105.5,107.5],
    },
    {
      label: 'Eurozóna',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(60,162,236,0.4)',
      borderColor: 'rgba(60,162,236,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(60,162,236,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(60,162,236,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [99.2,100.0,100.6,101.0,101.1,101.0,100.8,99.9,99.5,99.1,99.3,98.5,97.9,97.5,97.8,97.9,98.4,98.8,98.8,98.7,98.8,99.3,99.5,100.4,100.9,101.2,101.3,101.6,101.3,100.8,100.8,100.9,101.2,101.1,101.6,101.8,102.2,102.0,102.1,102.5,103.3,103.6,103.6,103.7,103.9,104.0,103.6,102.9,103.0,103.3,103.7,104.1,104.2,103.7,103.8,103.5,103.8,103.5,103.5,103.7,103.9,103.6,102.1,101.0,100.7,101.2,101.4,101.3,101.2,101.3,101.4,101.7,102.7,103.7,104.8,105.7,106.6,107.5,108.9]
    }
  ],
  options: {
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        title: {
          text: 'index cien',
          display: true,
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      }
    }
  }
};

const data2 = {
  graphTitle: 'ECB nafukuje svoju bilanciu a znehodnocuje cenu eura',
  graphDescription: 'Ceny nehnuteľností na Slovensku vzrástli za dekádu takmer o 60 percent. Namiesto trojizbového bytu si dnes kúpite v rovnakej hodnote len jednoizbový. (Pozn.: index cien nehnuteľností v roku 2010 = 100)',
  source: 'Zdroj: Ekonomický tím Slovenskej digitálnej koruny na základe údajov ECB a Eurostatu',
  labels: ["Q1 2006","Q2 2006","Q3 2006","Q4 2006","Q1 2007","Q2 2007","Q3 2007","Q4 2007","Q1 2008","Q2 2008","Q3 2008","Q4 2008","Q1 2009","Q2 2009","Q3 2009","Q4 2009","Q1 2010","Q2 2010","Q3 2010","Q4 2010","Q1 2011","Q2 2011","Q3 2011","Q4 2011","Q1 2012","Q2 2012","Q3 2012","Q4 2012","Q1 2013","Q2 2013","Q3 2013","Q4 2013","Q1 2014","Q2 2014","Q3 2014","Q4 2014","Q1 2015","Q2 2015","Q3 2015","Q4 2015","Q1 2016","Q2 2016","Q3 2016","Q4 2016","Q1 2017","Q2 2017","Q3 2017","Q4 2017","Q1 2018","Q2 2018","Q3 2018","Q4 2018","Q1 2019","Q2 2019","Q3 2019","Q4 2019","Q1 2020","Q2 2020","Q3 2020","Q4 2020","Q1 2021","Q2 2021"],
  datasets: [
    {
      label: 'Celkové aktíva ECB',
      yAxisID: 'A',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1067,1113,1118,1151,1163,1208,1250,1286,1366,1405,1759,2089,1836,1912,1845,1905,1943,2050,1866,2004,1888,1945,2289,2736,2964,3102,3082,2956,2648,2430,2351,2279,2161,2070,2054,2216,2334,2497,2627,2781,2942,3233,3438,3663,4101,4210,4319,4472,4530,4593,4620,4694,4696,4693,4695,4664,5200,6289,6705,6979,7494,7908],
    },
    {
      label: 'Index cien nehnuteľností na Slovensku',
      yAxisID: 'B',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(60,162,236,0.4)',
      borderColor: 'rgba(60,162,236,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(60,162,236,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(60,162,236,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [74.15,77.12,79.13,83.65,90.36,96.73,104.94,113.02,120.48,124.39,118.59,114.11,106.83,101.87,106.62,101.35,100.80,100.19,99.46,99.56,99.72,98.24,98.75,97.28,96.65,95.78,96.43,94.49,96.65,96.90,96.67,96.57,96.46,98.03,97.87,99.88,101.54,103.49,103.56,104.71,106.61,109.63,111.35,113.40,110.64,116.85,119.47,120.03,123.54,125.01,124.67,128.18,130.61,135.44,138.99,142.13,147.78,148.53,150.78,152.44,150.66,155.58]
    },
  ],
  options: {
    scales: {
      A: {
        type: 'linear',
        position: 'left',
        min: 0,
        max: 9000,
        title: {
          text: 'celkové aktíva ECB v mld. EUR',
          display: true,
        }
      },
      B: {
        type: 'linear',
        position: 'right',
        max: 180,
        min: 60,
        title: {
          text: 'index cien nehnuteľností na Slovensku',
          display: true,
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      }
    }
  }
};

const data3 = {
  graphTitle: 'Ceny Bitcoin a Ether sa šplhajú do rekordných úrovní a bohato odmeňujú dlhodobých investorov',
  graphDescription: 'Priemerné kurzy BTC/EUR a ETH/EUR za jednotlivé mesiace od septembra 2015 ukazujú jasný vzostupný trend. Súčasná vysoká cena populárnych kryptomien môže byť limitujúca pre budúce zisky. Investovať medzi prvými prináša s vyšším rizikom aj možnosť vyššieho zisku.',
  source: 'Zdroj: Ekonomický tím Slovenskej digitálnej koruny na základe údajov CoinGecko',
  labels: ["9/2015", "10/2015", "11/2015", "12/2015", "1/2016","2/2016","3/2016","4/2016","5/2016","6/2016","7/2016","8/2016","9/2016","10/2016","11/2016","12/2016","1/2017","2/2017","3/2017","4/2017","5/2017","6/2017","7/2017","8/2017","9/2017","10/2017","11/2017","12/2017","1/2018","2/2018","3/2018","4/2018","5/2018","6/2018","7/2018","8/2018","9/2018","10/2018","11/2018","12/2018","1/2019","2/2019","3/2019","4/2019","5/2019","6/2019","7/2019","8/2019","9/2019","10/2019","11/2019","12/2019","1/2020","2/2020","3/2020","4/2020","5/2020","6/2020","7/2020","8/2020","9/2020","10/2020","11/2020","12/2020","1/2021","2/2021","3/2021","4/2021","5/2021","6/2021","7/2021","8/2021","9/2021","10/2021"],
  datasets: [
    {
      label: 'BTC/EUR',
      yAxisID: 'A',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [207.75,236.5,324.28,389.17,378.04,363.16,372.37,382.94,409.17,571.15,597.94,515.61,539.45,581.02,671.84,783.33,856.59,1000.71,1057.4,1135.44,1697.98,2350.05,2178.38,3216.62,3401.3,4540.92,6660.19,13159.65,11114.27,7658.09,7414.33,6448.28,7137.48,5810,6046.46,5803.47,5674.46,5656.29,4839.95,3239.39,3205.87,3238.11,3476.83,4556.16,6426.81,8259.29,9528.95,9554.28,8922.56,7553.32,7587.92,6537.8,7473.02,8850.28,6268.58,6564.22,8441.67,8437.16,8313.7,9834.91,9049.06,10014.42,13893.51,17827.06,28456.84,37934,45795.38,47832.59,38899.82,29852.77,28974.58,38714.27,39112.73,49559.51],
    },
    {
      label: 'ETH/EUR',
      yAxisID: 'B',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(60,162,236,0.4)',
      borderColor: 'rgba(60,162,236,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(60,162,236,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(60,162,236,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0.88,0.59,0.87,0.81,1.36,4.06,9.98,7.91,10.05,12.74,10.69,9.88,11.11,10.92,9.22,7.41,9.53,11.61,31.78,47.31,111.26,274.05,192.15,253.67,245.34,259.94,305.17,543.23,916.32,706.98,515.56,413.67,570.18,444.22,393.47,281.76,196.46,183.96,151.94,94.22,111.45,110.55,120.2,146.4,193.52,242.36,223.27,180.41,168.22,161.57,157.24,124.26,139.43,217.64,146.74,155.35,188.97,209.88,222.9,337.14,313.93,318.6,404.21,509.03,972.97,1403.23,1445.56,1895.9,2599.36,1951.01,1797.92,2608.73,2844.85,3263.65]
    }
  ],
  options: {
    scales: {
      A: {
        type: 'linear',
        position: 'left',
        min: 0,
        max: 60000,
        title: {
          text: 'Cena 1 BTC v EUR',
          display: true,
        }
      },
      B: {
        type: 'linear',
        position: 'right',
        min: 0,
        max: 5000,
        title: {
          text: 'Cena 1 ETH v EUR',
          display: true,
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      }
    }
  }
};

const VerticalFeatures = () => (
  <Section
    title="Práca, peniaze a ich hodnota"
    description="O výške Vašej výplaty rozhoduje Vaša kvalifikácia, zručnosti a skúsenosti. 
    Najvyššie platové ohodnotenie dosiahnete, ak budete mať kvalifikáciu v oblasti, 
    ktorú neovláda až toľko ľudí. Trhový mechanizmus založený na dopyte a ponuke Vás potom férovo ohodnotí. 
    Ale, keďže hodnota 1 eura môže byť zajtra nižšia ako dnes, ohodnotenie za Vašu prácu nemusí byť až také férové, ako by ste si zaslúžili."
  >
    <VerticalFeatureRow
      title="Európska centrálna banka (ECB)"
      description="O tom, akú hodnotu bude mať 1 euro nerozhoduje trh, tak ako o Vašej mzde, 
      ale Rada guvernérov Európskej centrálnej banky (ECB)². O menovej politike  eurozóny, a teda aj o hodnote euromince, 
      sa rozhoduje hlasovaním (hlasuje šesť členov Výkonnej rady a 19 guvernérov národných centrálnych bánk)³.
      Nikoho asi neprekvapí, že všetky krajiny obhajujú svoje individuálne záujmy a guvernéri nehlasujú len podľa odporúčaní odborníkov (hlasovanie je tajné)⁴. 
      Je samozrejmé, že bohaté krajiny ako Nemecko chcú chrániť svoje úspory. Už menej zrejmé je, že zadlženým južným štátom vyhovuje pokles 
      hodnoty spoločnej európskej meny. S klesajúcou hodnotou eura sa znižujú ich (nesplatiteľné) dlhy bez toho, aby si občania v týchto krajinách museli utiahnuť opasky."
      graph={data2}
    />
    <VerticalFeatureRow
      title="Spoločná menová politika?"
      description="Guvernéri by sa pri hlasovaní mali rozhodovať na základe odporúčaní a podľa modelov, ktoré vypracovalo 3500 odborníkov ECB. 
      Hlasovanie je ale výrazne ovplyvnené protichodnými ekonomickými a politickými záujmami krajín, a dokonca aj osobnými ambíciami samotných guvernérov. 
      Jednoducho povedané, cena peňazí nie je výsledkom snahy o najlepšie možné riešenie a je otázne, či výraz spoločná menová politika správne vystihuje konanie ECB."
      reverse
      graph={data1}
    />
    <VerticalFeatureRow
      title="Slovensko, euro a Slovenská digitálna koruna"
      description="Záujmy 5 miliónov Slovákov sú na chvoste 340 miliónovej menovej únie. 
      Mnohé vyspelé ekonomiky Európy (Dánsko alebo Švédsko) odmietli princíp umelo ovplyvňovanej meny zo zahraničia a chcú chrániť ich občanov pred 
      rozhodnutiami Rady guvernérov ECB⁵. Rovnakú možnosť budú mať aj investori do slovenskej kryptomeny. 
      Ponuka Slovenských digitálnych korún je konečná, nebude možné aby novovytvorené (vytlačené) peniaze znížili hodnotu Vašich príjmov alebo úspor. 
      Naopak, rastúci dopyt bude viesť k rastu hodnoty Vašich investícii. 
      Ceny kryptomien sa odvíjajú, rovnako ako Vaša mzda, od trhového mechanizmu dopytu a ponuky. 
      Slovenská digitálna koruna nevzniká mimo územia Slovenska, nehlasuje sa o jej hodnote a komerčné banky nemajú na jej hodnotu žiadny vplyv."
      graph={data3}
    />
  </Section>
);

export { VerticalFeatures };
