import { ExternalLink, Radar, Zap } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import styles from './preview.module.css';
import full from './full.module.css';
import tune from './tuning.module.css';
import service from './service.module.css';
import adjust from './adjustments.module.css';
import requested from './requested-overrides.module.css';
import pubs from './publications.module.css';

const members = [
  ['Peter Horvath','Hardware & AI security','Researches physical side-channel attacks on AI hardware, with a focus on GPU security. Showed that edge GPUs leak neural-network weights through electromagnetic emissions (BarraCUDA, USENIX Security 2025).','https://github.com/PeterHorvath10'],
  ['Zhuoran Liu','Adversarial ML','Assistant Professor in AI and hardware security. Researches adversarial machine learning and the security and privacy of AI systems, connecting attacks on models with their physical implementations.','https://liuzrcc.github.io/'],
  ['Xue Wang','Economics & AI','PhD in Economics with a research background in AI.','https://www.linkedin.com/in/xue-wang-80b982258'],
  ['Ilia Shumailov','AI security','','https://iliaishacked.github.io/'],
  ['Lejla Batina','Physical security','Professor in hardware security and a pioneer in the physical security of cryptographic and AI hardware. Co-authored CSI NN (USENIX Security 2019), one of the first works to reverse-engineer neural networks through side channels.','https://www.ru.nl/en/people/batina-l'],
];
const team = members.map(([name]) => name);

type Publication = { badge: string; title: string; authors: string[]; venue: string; links: [string, string][] };
const publications: Publication[] = [
  { badge: 'arXiv 2026', title: 'Triggering Stealthy Feature Map Backdoors via Physical Fault Injection in Embedded Neural Networks', authors: ['Steyn Hommes', 'Vincent Dankbaar', 'Tanguy Stekke', 'Xiaomeng Wang', 'Lisanne Weidmann', 'Senna van Hoek', 'Durba Chatterjee', 'Lejla Batina', 'Zhuoran Liu'], venue: 'arXiv preprint arXiv:2607.09473, 2026', links: [['arXiv', 'https://arxiv.org/abs/2607.09473'], ['PDF', 'https://arxiv.org/pdf/2607.09473']] },
  { badge: 'SaTML 2026', title: 'Kraken: Higher-order EM Side-Channel Attacks on DNNs in Near and Far Field', authors: ['Peter Horvath', 'Ilia Shumailov', 'Lukasz Chmielewski', 'Lejla Batina', 'Yuval Yarom'], venue: 'In IEEE Conference on Secure and Trustworthy Machine Learning (SaTML), 2026', links: [['arXiv', 'https://arxiv.org/abs/2603.02891']] },
  { badge: 'USENIX Security 2025', title: 'BarraCUDA: Edge GPUs do Leak DNN Weights', authors: ['Peter Horvath', 'Lukasz Chmielewski', 'Léo Weissbart', 'Lejla Batina', 'Yuval Yarom'], venue: 'In 34th USENIX Security Symposium (USENIX Security 25), Seattle, WA, 2025', links: [['PDF', 'https://www.usenix.org/system/files/usenixsecurity25-horvath.pdf'], ['Website', 'https://www.usenix.org/conference/usenixsecurity25/presentation/horvath']] },
  { badge: 'USENIX Security 2024', title: 'SoK: Neural Network Extraction Through Physical Side Channels', authors: ['Peter Horvath', 'Dirk Lauret', 'Zhuoran Liu', 'Lejla Batina'], venue: 'In 33rd USENIX Security Symposium (USENIX Security 24), Philadelphia, PA, 2024', links: [['PDF', 'https://www.usenix.org/system/files/usenixsecurity24-horvath.pdf'], ['Website', 'https://www.usenix.org/conference/usenixsecurity24/presentation/horvath']] },
  { badge: 'USENIX Security 2019', title: 'CSI NN: Reverse Engineering of Neural Network Architectures Through Electromagnetic Side Channel', authors: ['Lejla Batina', 'Shivam Bhasin', 'Dirmanto Jap', 'Stjepan Picek'], venue: 'In 28th USENIX Security Symposium (USENIX Security 19), Santa Clara, CA, 2019', links: [['PDF', 'https://www.usenix.org/system/files/sec19-batina.pdf'], ['Website', 'https://www.usenix.org/conference/usenixsecurity19/presentation/batina']] },
];

export default function BlackWhitePreview() {
  return <main className={`${styles.page} ${requested.page}`}>
    <header className={`${styles.header} ${requested.header}`}>
      <a className={requested.logo} href="#evaluate" aria-label="Phyres.ai — Home"><BrandLogo className={requested.logoImage}/></a>
      <nav aria-label="Main navigation" className={requested.nav}><a href="#evaluate">Research</a><a href="#team">Team</a><a href="#evidence">Publications</a></nav>
    </header>

    <div className={requested.slides} tabIndex={0} role="region" aria-label="Phyres page sections">
    <section id="evaluate" className={`${styles.evaluate} ${tune.compactEvaluate} ${adjust.evaluate} ${requested.section} ${requested.evaluate}`}>
      <div className={`${styles.titleBlock} ${tune.leftTitle}`}><h2>Where hardware security<br/>meets AI security.</h2></div>
      <p className={styles.statement}>Our research combines physical side-channel / fault-injection analysis with adversarial ML<br/>to understand and protect AI data, models, workloads, and hardware.</p>
      <div className={`${styles.services} ${adjust.centeredServices}`}>
        <article><span>01</span><Zap/><div><h3 className={service.serviceTitle}>Fault injection & integrity</h3><p className={service.serviceCopy} tabIndex={0}>Studying how injected faults affect AI applications across their full life cycle on real hardware</p></div></article>
        <article><span>02</span><Radar/><div><h3 className={service.serviceTitle}>Data leakage</h3><p className={service.serviceCopy} tabIndex={0}>Revealing side-channel leakage and analyzing the AI workload characteristics that give rise to it</p></div></article>
      </div>
    </section>

    <section id="team" className={`${full.company} ${tune.compactDark} ${adjust.company} ${requested.section} ${requested.company}`}><div className={`${full.darkIntro} ${tune.leftDarkIntro}`}><h2>Hardware and AI security team</h2></div><div className={`${full.team} ${tune.leftTeam} ${adjust.centeredTeam}`}>{members.map(([name,role,bio,profile]) => <article key={name}><div className={adjust.memberLine}><a href={profile} target="_blank" rel="noreferrer"><h3>{name}</h3><ExternalLink/></a><span>{role}</span></div>{bio && <p className={adjust.memberBio}>{bio}</p>}</article>)}</div></section>

    <div className={requested.applicationSlide}>
    <section id="evidence" className={pubs.publications}>
      <h2 className={pubs.heading}>Selected Publications</h2>
      <ol className={pubs.list}>{publications.map(p => <li key={p.title} className={pubs.entry}>
        <span className={pubs.badge}>{p.badge}</span>
        <div>
          <p className={pubs.title}>{p.title}</p>
          <p className={pubs.authors}>{p.authors.map((a, i) => <span key={a}>{i > 0 && ', '}{team.includes(a) ? <b>{a}</b> : a}</span>)}</p>
          <p className={pubs.venue}>{p.venue}</p>
          <div className={pubs.links}>{p.links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div>
        </div>
      </li>)}</ol>
    </section>

    <footer className={`${styles.footer} ${requested.footer}`}><a className={requested.logo} href="#evaluate" aria-label="Phyres.ai — Home"><BrandLogo className={requested.logoImage}/></a></footer>
    </div>
    </div>
  </main>;
}
