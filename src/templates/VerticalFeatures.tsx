import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const data1 = {
  graphTitle: 'Ceny výrobcov prudko rastú, čaká nás budúci rast výdavkov spotrebiteľov',
  graphDescription: 'Okolité krajiny s vlastnou menovou politikou môžu zvyšovať sadzby aby spomalili rast cien. ECB pokračuje v tlaku na rast cien, len aby neublížila zadĺženým krajinám. Slováci si tak za svoje eurá kúpia menej. (Pozn.: index cien v roku 2015 = 100)',
  source: 'Zdroj: Ekonomický tím Slovenskej digitálnej koruny na základe údajov OECD',
  labels: ["2015","","","","","","","","","","","","2016","","","","","","","","","","","","2017","","","","","","","","","","","","2018","","","","","","","","","","","","2019","","","","","","","","","","","","2020","","","","","","","","","","","","2021","","","","","","",""],
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
  graphDescription: 'Ceny nehnuteľnosti na Slovensku vzrástli za dekádu takmer o 60 percent. Miesto trojizbového bytu si dnes kúpite len jednoizbový. (Pozn.: index ceny nehnuteľnosti v roku 2010 = 100)',
  source: 'Zdroj: Ekonomický tím Slovenskej digitálnej koruny na základe údajov ECB a Eurostatu',
  labels: ["2006","","","","2007","","","","2008","","","","2009","","","","2010","","","","2011","","","","2012","","","","2013","","","","2014","","","","2015","","","","2016","","","","2017","","","","2018","","","","2019","","","","2020","","","","2021",""],
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
      label: 'Index ceny nehnuteľností na Slovensku',
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
          text: 'index ceny nehnuteľností na Slovensku',
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
  graphDescription: 'Kurzy BTC/EUR a ETH/EUR na začiatku jednotlivých mesiacov od roku 2016 ukazujú jasný vzostupný trend. Súčasná vysoká cena populárnych kryptomien môže byť limitujúca pre budúce zisky. Investovať medzi prvými prináša s vyšším rizikom aj možnosť vyššieho zisku.',
  source: 'Zdroj: Ekonomický tím Slovenskej digitálnej koruny na základe údajov CoinGecko',
  labels: ["2016","","","","","","","","","","","","2017","","","","","","","","","","","","2018","","","","","","","","","","","","2019","","","","","","","","","","","","2020","","","","","","","","","","","","2021","","","","","","","","","",""],
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
      data: [400,340.7,397.1,365.7,395,482.1,608.4,542.4,510.5,546.3,659.4,706.2,948.7,916.3,1163.5,1017.7,1292.2,2173.7,2135.6,2319,4099.8,3681.7,5775.3,9245.5,11732.7,8143.6,8485.2,5657.6,7612.8,6378.5,5440.2,6620,6052.2,5709.4,5626.6,3542.6,3213.3,2998,3354.9,3655.8,4719.6,7661.3,9579.7,9090.5,8725.3,7588.7,8203.7,6858.1,6412.8,8389.3,7755.8,5822.5,7867.8,8514,8144.2,9615.2,9776.8,9186.4,11799.3,16425.9,23758.7,27271.2,37203.3,50151.5,48112.2,30522.3,29666.8,35185.1,40076.7,37893,54458.5],
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
      data: [0.9, 2, 7, 10.2, 7.7, 12.4, 11.1, 9.8, 10.7, 11.8, 9.8, 7.9, 7.7, 9.9, 16.3, 47.3, 70.5, 197.9, 229.7, 192.4, 325.7, 253.8, 251.4, 395.1, 646.1, 890.6, 694.1, 321, 548.5, 488.8, 384, 369.9, 243.1, 200.6, 175.5, 100.2, 114.4, 92.9, 119.1, 126.1, 143.3, 239.5, 257.6, 197.5, 156.3, 164.9, 163.8, 137.7, 115.1, 161.5, 198, 120.8, 187.8, 208.9, 200.8, 293.8, 364.9, 306.7, 330.4, 512.9, 604.7, 1086.3, 1171.8, 1633.7, 2310.2, 2213.9, 1922.6, 2141.8, 2913, 2603.6,3643.5]
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
    Najvyššie platové ohodnotenie dosiahnete, ak budete mat kvalifikáciu v oblasti, 
    ktorú neovláda až toľko ľudí. Trhový mechanizmus založený na dopyte a ponuke Vás potom férovo ohodnotí. 
    Ale kvôli euru nie až tak férovo ako by ste si zaslúžili... hodnota 1 eura môže byť zajtra nižšia ako dnes."
  >
    <VerticalFeatureRow
      title="Európska centrálna banka (ECB)"
      description="O tom, akú hodnotu bude mať 1 euro nerozhoduje trh, tak ako o Vašej mzde, 
      ale Rada guvernérov Európskej centrálnej banky (ECB)². O menovej politike  eurozóny, a teda aj o hodnote euromince, 
      sa rozhoduje hlasovaním (hlasuje šesť členov Výkonnej rady a 19 guvernérov národných centrálnych bánk)³.
      Nikoho asi neprekvapí, že všetky krajiny hája svoje individuálne záujmy a guvernéri nehlasujú len podľa odporúčaní odborníkov (hlasovanie je tajné)⁴. 
      Je samozrejmé, že bohaté krajiny ako Nemecko chcú chrániť svoje úspory. Už menej zrejmé je, že zadĺženým južanským štátom vyhovuje pokles 
      hodnoty spoločnej európskej meny. S klesajúcou hodnotou eura sa znižujú ich (nesplatiteľné) dlhy bez toho, aby si občania v týchto krajinách museli utiahnuť opasky."
      graph={data2}
    />
    <VerticalFeatureRow
      title="Spoločná menová politika?"
      description="Guvernéri by sa pri hlasovani mali rozhodovať podľa odporúčaní a modelov, ktoré vypracovalo 3500 odborníkov ECB. 
      Hlasovanie je ale výrazne ovplyvnené protichodnými ekonomickými a politickými záujmami krajín a dokonca aj osobnými ambíciami samotných guvernérov. 
      Jednoducho povedané, cena peňazí nie je výsledkom snahy o najlepšie možné riešenie a je otázne či výraz spoločná menová politika správne popisuje konanie ECB."
      reverse
      graph={data1}
    />
    <VerticalFeatureRow
      title="Slovensko, euro a Slovenská digitálna koruna"
      description="Záujmy 5 miliónov Slovákov sú na chvoste 340 miliónej menovej únie. 
      Mnohé vyspelé ekonomiky Európy (Dánsko alebo Švédsko) odmietli princíp umelo ovplyvňovanej meny zo zahraničia a chcú chrániť ich občanov pred 
      rozhodnutiami Rady guvernérov ECB⁵. Rovnakú možnosť budú mať aj investori do slovenskej kryptomeny. 
      Ponuka Slovenských digitálnych korún je konečná, nebude možné aby novovytvorené (vytlačené) peniaze znížili hodnotu Vašich príjmov alebo úspor. 
      Naopak, rastúci dopyt bude viesť k rastu hodnoty Vašich investícii. 
      Ceny kryptomien sa rovnako ako Vaša mzda odvíja od trhového mechanizmu dopytu a ponuky. 
      Slovenská digitálna koruna nevzniká mimo územia Slovenska, nehlasuje sa o jej hodnote a komerčné banky nemajú na jej hodnotu žiadny vplyv."
      graph={data3}
    />
  </Section>
);

export { VerticalFeatures };
