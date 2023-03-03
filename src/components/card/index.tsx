import React from 'react';
import styles from './card.module.css';

type CardItem = {
  title?: string;
  description?: string; 
  link?: string; 
  linkText?: string; 
  svgName?: string; 
  cardPerRow?: string;
};

const cardImages = {
 impact:  require(`@site/concepts/koii-summary/img/How Koii Benefits You.png`).default,
 socialTech:  require(`@site/concepts/koii-summary/img/Social Technology.png`).default,
 tools: require(`@site/concepts/koii-summary/img/Tools.png`).default,
 philosophy: require(`@site/concepts/koii-summary/img/Philosophy of decentralization.png`).default,
 attention:  require(`@site/concepts/koii-summary/img/Attention mining.svg`).default,
 node:  require(`@site/concepts/koii-summary/img/Compute Sharing Economy- Run a node.png`).default,
 grant:  require(`@site/concepts/koii-summary/img/grant.png`).default,
 tokenomics:  require(`@site/concepts/koii-summary/img/Staking and Voting.png`).default,
 tasks:  require(`@site/concepts/koii-summary/img/Deploying Tasks.png`).default,
 governanceVideo:  require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 21-29-53.png`).default,
 designTasksVideo:  require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 21-31-53.png`).default,
 reputationVideo:  require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 21-34-09.png`).default,
 finnie:  require(`@site/concepts/koii-summary/img/Finnie Wallet.png`).default,
 koiiDid:  require(`@site/concepts/koii-summary/img/Koii DID.png`).default,
 finnieVideo:  require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 21-40-16.png`).default,
 koiiXVideo:  require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 21-38-19.png`).default,
 koiiX:  require(`@site/concepts/koii-summary/img/Welcome to Koii-X.png`).default,
 discord:  require(`@site/concepts/koii-summary/img/Discord.png`).default,
 peeranha: require(`@site/concepts/koii-summary/img/Peeranha forums.png`).default,
 decentralConVideo: require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 22-33-40.png`).default,
 decentralizationVideo: require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 22-34-11.png`).default,
 internetVideo: require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 22-34-34.png`).default,
 userGovernanceVideo: require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 22-35-19.png`).default,
 protocolVideo: require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 22-35-02.png`).default,
 carpVideo: require(`@site/concepts/koii-summary/img/Screenshot from 2023-01-18 22-37-36.png`).default,
 consensus: require(`@site/concepts/koii-summary/img/Gradual Consensus.png`).default,
 carp: require(`@site/concepts/koii-summary/img/CARP.png`).default,
}

function Card ({title, description, link, linkText, svgName, cardPerRow="3"}:CardItem) {
    const image = cardImages[svgName]
  return (
    <a href={link} className={styles.card} style={{width: `calc((100% / ${cardPerRow}) - 20px)`}}>
         {
          image && (
            <img src={image} className={styles.cardSvg} role="img" />
          )
         }
        <div className={styles.textContainer}>
            <div  dangerouslySetInnerHTML={{__html: title}}/>
           <div dangerouslySetInnerHTML={{__html: description}}/>
            <a href={link}>{linkText}</a>
        </div>
    </a>
  );
}


export function Cards({children}): JSX.Element {
  return (
    <section>
      <div>
        <div className={styles.cardContainer}>
            {children}
        </div>
      </div>
    </section>
  );
}

export default Card;
