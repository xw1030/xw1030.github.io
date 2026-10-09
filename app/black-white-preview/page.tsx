import { ArrowRight, Bot, Car, CircuitBoard, ExternalLink, Factory, HeartPulse, Mail, Radar, Server, ShieldCheck, Zap } from 'lucide-react';
import styles from './preview.module.css';
import full from './full.module.css';
import tune from './tuning.module.css';
import service from './service.module.css';
import adjust from './adjustments.module.css';
import requested from './requested-overrides.module.css';

const mailto = 'mailto:xuewang1129@hotmail.com?subject=Discuss%20an%20AI%20hardware%20evaluation';

const workflow = [['01','Threat definition','Define protected assets, attacker access and measurable success criteria.'],['02','Physical testing','Capture physical leakage or inject controlled voltage, clock and electromagnetic disturbances.'],['03','AI-level impact','Determine how physical effects change model data, parameters, outputs or control flow.'],['04','Mitigation','Develop practical countermeasures across hardware, runtimes and software.'],['05','Re-evaluation','Re-test the implementation and quantify the remaining exposure.']];
const evidence = [['IEEE SaTML 2026','Kraken: Higher-order EM Side-Channel Attacks on DNNs in Near and Far Field','Higher-order EM analysis · near and far field','GPU Tensor Cores · LLM workloads','Extracted parameters from GPU Tensor Cores and observed LLM hyperparameter and weight leakage at distances up to 100 cm through glass.','https://arxiv.org/abs/2603.02891'],['USENIX Security 2025','BarraCUDA: Edge GPUs do Leak DNN Weights','Correlation electromagnetic analysis','NVIDIA Jetson Nano GPU','Recovered parameters from real-world convolutional neural networks running on an edge GPU.','https://www.usenix.org/conference/usenixsecurity25/presentation/horvath'],['ACNS Workshops 2024','CNN Architecture Extraction on Edge GPU','EM side channel + deep learning','NVIDIA Jetson Nano GPU','Distinguished 15 popular CNN architectures from physical emissions during inference.','https://arxiv.org/abs/2401.13575'],['USENIX Security 2019','CSI NN: Reverse Engineering of Neural Network Architectures','Electromagnetic side-channel analysis','ARM Cortex-M3','Recovered neural-network structure, including layer and activation information, from embedded execution.','https://www.usenix.org/conference/usenixsecurity19/technical-sessions'],['Research · 2025','ScaAR: Real-world Edge Neural Networks Leak Private Interactions','EM analysis + neural classification','AMD-Xilinx ZCU104 · Raspberry Pi','Classified private interactions and distinguished LLM tokens from physical execution traces.','https://arxiv.org/abs/2501.14512']];
const team = [['Lejla Batina','Co-founder · Founding Scientific Advisor','Professor of Digital Security at Radboud University, with leading expertise in side-channel analysis, fault injection and secure hardware evaluation.','https://www.ru.nl/en/people/batina-l'],['Péter Horváth','Co-founder · Technical Lead','Researcher in physical attacks on neural networks and GPUs, including architecture and weight leakage from real devices.','https://www.ru.nl/en/people/horvath-p'],['Zhuoran Liu','Co-founder · Founding Scientific Advisor','Assistant Professor at the University of Amsterdam working across AI security, privacy and hardware attacks.','https://liuzrcc.github.io/'],['Xue Wang','Co-founder · Business and Strategy','Leads commercial strategy, market validation and customer development, drawing on economics, AI and data science.','']];

export default function BlackWhitePreview() {
  return <main className={styles.page}>
    <header className={`${styles.header} ${requested.header}`}>
      <a className={`${styles.logo} ${requested.logo}`} href="#top">phyres<span>.ai</span></a>
      <nav className={requested.nav}><a href="#evaluate">Solutions</a><a href="#workflow">Approach</a><a href="#evidence">Evidence</a><a href="#company">Company</a></nav>
      <a className={`${styles.headerCta} ${requested.headerCta}`} href={mailto}>Contact us</a>
    </header>

    <section id="top" className={styles.hero}>
      <img className={styles.emBackground} src="/hero-em-signal.png" alt="" aria-hidden="true"/>
      <div className={styles.emOverlay} aria-hidden="true"/>
      <div className={styles.shimmer} aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      <div className={styles.heroInner}>
        <p className={`${styles.eyebrow} ${requested.heroEyebrow}`}>Physical security solutions for AI hardware</p>
        <h1 className={tune.heroTitle}>Secure AI,<br/><span>down to the silicon.</span></h1>
        <p className={styles.intro}>We connect physical side-channel / fault-injection and adversarial AI methods to secure AI data, models, workloads, and hardware.</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={mailto}>Contact us <ArrowRight/></a>
          <a className={styles.secondary} href="#evaluate">Explore our approaches</a>
        </div>
      </div>
    </section>

    <section id="evaluate" className={`${styles.evaluate} ${tune.compactEvaluate} ${adjust.evaluate}`}>
      <div className={`${styles.titleBlock} ${tune.leftTitle}`}><h2>From physical red teaming<br/>to secure AI hardware.</h2></div>
      <p className={styles.statement}>We do more than show that leakage or a fault exists.<br/>We determine what it means for the AI workload.</p>
      <div className={`${styles.services} ${adjust.centeredServices}`}>
        <article><span>01</span><Zap/><div><h3 className={service.serviceTitle}>Fault injection & integrity</h3><p className={service.serviceCopy}>Can a physical disturbance alter AI outputs, bypass controls or compromise a safety-relevant decision?</p></div></article>
        <article><span>02</span><Radar/><div><h3 className={service.serviceTitle}>Physical leakage</h3><p className={service.serviceCopy}>Does execution expose model architecture, weights, inputs, outputs or other protected assets?</p></div></article>
        <article><span>03</span><ShieldCheck/><div><h3 className={service.serviceTitle}>Mitigation & retesting</h3><p className={service.serviceCopy}>Do hardware, runtime or software countermeasures measurably reduce the exposure?</p></div></article>
      </div>
    </section>

    <section id="workflow" className={`${full.workflow} ${tune.compactDark} ${adjust.workflow}`}><div className={`${full.darkIntro} ${tune.leftDarkIntro}`}><p className={styles.eyebrow}>Evaluation workflow</p><h2>A complete<br/>assurance loop.</h2><p>Physical measurements become AI-level findings, mitigations and verified evidence.</p></div><div className={`${full.workflowList} ${tune.compactWorkflow}`}>{workflow.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section id="evidence" className={`${full.evidence} ${tune.compactLight} ${adjust.evidence}`}><div className={`${styles.titleBlock} ${tune.leftTitle}`}><p className={styles.eyebrowDark}>Evidence</p><h2>Tested on real hardware.</h2></div><p className={`${full.evidenceLead} ${tune.leftLead}`}>Peer-reviewed work demonstrates the team’s capability across GPUs, FPGAs and embedded processors.</p><div className={full.evidenceList}>{evidence.map(([publication,title,attack,hardware,result,href],index) => <a href={href} target="_blank" rel="noreferrer" key={title}><span className={full.rowNo}>{String(index+1).padStart(2,'0')}</span><div className={full.paper}><p>{publication}</p><h3>{title}</h3><p>{result}</p></div><div className={full.spec}><p><b>Attack</b>{attack}</p><p><b>Hardware</b>{hardware}</p></div><ExternalLink/></a>)}</div></section>

    <section className={`${full.context} ${tune.compactContext} ${adjust.context}`}><img src="/what-we-evaluate-chip.png" alt="Technical illustration of an AI accelerator package"/><div className={full.contextOverlay}/><div className={full.contextCopy}><p className={styles.eyebrow}>Where it matters</p><h2>High-value AI.<br/>Real-world consequences.</h2><p>Particularly relevant where valuable models, sensitive data or safety-critical decisions execute on-device.</p></div></section>

    <section className={`${full.sectors} ${tune.compactSectors}`}>{[[CircuitBoard,'AI chips & accelerators'],[Car,'Automotive & mobility'],[HeartPulse,'Medical devices'],[Factory,'Industrial systems'],[Bot,'Robotics & edge sensing'],[Server,'AI infrastructure']].map(([Icon,label]) => { const I = Icon as typeof CircuitBoard; return <div key={label as string}><I/><span>{label as string}</span></div> })}</section>

    <section id="company" className={`${full.company} ${tune.compactDark} ${adjust.company}`}><div className={`${full.darkIntro} ${tune.leftDarkIntro}`}><p className={styles.eyebrow}>Company</p><h2>Research-led.<br/>Built for deployment.</h2><p>A founding team spanning physical hardware security, AI privacy, product evaluation and commercial development.</p></div><div className={`${full.team} ${tune.leftTeam} ${adjust.centeredTeam}`}>{team.map(([name,role,bio,profile]) => <article key={name}><div className={adjust.memberLine}>{profile ? <a href={profile} target="_blank" rel="noreferrer"><h3>{name}</h3><ExternalLink/></a> : <h3>{name}</h3>}<span>{role}</span></div><p className={adjust.memberBio}>{bio}</p></article>)}</div><div className={`${full.funding} ${adjust.centeredFunding}`}><p className={styles.eyebrow}>Funding & partnerships</p><p>We are engaging with strategic investors and funding partners as we move from research validation to customer pilots.</p></div></section>

    <section id="contact" className={`${full.contact} ${tune.compactContact}`}><p className={styles.eyebrowDark}>Work with us</p><h2>Evaluate a real device,<br/>workload or protection claim.</h2><a className={full.darkButton} href={mailto}>Contact us <ArrowRight/></a></section>

    <footer className={styles.footer}><a className={styles.logo} href="#top">phyres<span>.ai</span></a><p>Independent AI-hardware security evaluation.</p><div><a href="mailto:xuewang1129@hotmail.com"><Mail/> xuewang1129@hotmail.com</a><a href="mailto:peter.horvath2@ru.nl"><Mail/> peter.horvath2@ru.nl</a></div></footer>
  </main>;
}
