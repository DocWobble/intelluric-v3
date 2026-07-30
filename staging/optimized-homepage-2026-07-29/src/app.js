(() => {
  'use strict';

  const icon = {
    pitch: `<svg viewBox="0 0 48 48"><path d="M9 10h30v22H9z"/><path d="M24 32v8M17 40h14M15 26l6-6 5 3 7-9M15 14h8"/></svg>`,
    irb: `<svg viewBox="0 0 48 48"><circle cx="24" cy="14" r="7"/><path d="M12 38v-7c0-6 5-10 12-10s12 4 12 10v7M18 30c1.5 3 3.5 5 6 7 2.5-2 4.5-4 6-7M8 19c3-4 6-5 10-5M40 19c-3-4-6-5-10-5"/></svg>`,
    grant: `<svg viewBox="0 0 48 48"><path d="M14 5h15l8 8v30H14z"/><path d="M29 5v9h8M20 21h11M20 27h11M20 33h8"/></svg>`,
    litigation: `<svg viewBox="0 0 48 48"><path d="M24 6v34M12 12h24M17 12l-8 15h16l-8-15ZM31 12l-8 15h16l-8-15ZM15 42h18"/></svg>`,
    feasibility: `<svg viewBox="0 0 48 48"><path d="M4 27h7l4-13 7 25 6-18 5 10h11"/></svg>`,
    diligence: `<svg viewBox="0 0 48 48"><path d="M24 5 39 11v11c0 10-6.4 17.1-15 21-8.6-3.9-15-11-15-21V11L24 5Z"/><path d="m18 24 4 4 8-9"/></svg>`
  };

  const assets = [
    'assets/sample-investor.jpg',
    'assets/sample-research.jpg',
    'assets/sample-feasibility.jpg',
    'assets/sample-litigation.jpg'
  ];

  const services = [
    {
      id: 'pitch-decks',
      title: 'Pitch Decks',
      description: 'Investor presentations for technical companies',
      accent: '86, 136, 255',
      icon: icon.pitch,
      samples: [
        ['Technical Investor Deck', 'A complex platform explained for a nontechnical investment audience.', 'Presentation · 16 slides'],
        ['Turbulence Sensor Pitch', 'A real-time sensing platform organized for a specialist investment audience.', 'Presentation · 14 slides'],
        ['Neurotechnology Platform', 'A closed-loop therapeutic platform translated into a decision-ready narrative.', 'Presentation · 18 slides'],
        ['Industrial Systems Pitch', 'An engineering platform framed around deployment, risk, and commercial value.', 'Presentation · 12 slides'],
        ['Climate Hardware Brief', 'A technical venture presented through evidence, milestones, and market logic.', 'Presentation · 15 slides']
      ]
    },
    {
      id: 'irb-proposals',
      title: 'IRB Proposals',
      description: 'Study materials prepared for scientific and ethics review',
      accent: '84, 193, 221',
      icon: icon.irb,
      samples: [
        ['Research Proposal', 'A study protocol organized for scientific and ethics review.', 'Document · 22 pages'],
        ['Risk and Safeguards Plan', 'Participant risk, monitoring, and safeguards made explicit for review.', 'Document · 12 pages'],
        ['Protocol Amendment', 'A revised study design with rationale, deltas, and updated procedures.', 'Document · 9 pages'],
        ['Consent Materials', 'Participant-facing information aligned to the approved research protocol.', 'Document · 8 pages'],
        ['Methods Review', 'A technical review of endpoints, procedures, and data handling.', 'Report · 17 pages']
      ]
    },
    {
      id: 'grant-applications',
      title: 'Grant Applications',
      description: 'Technical narratives built around the funder’s requirements',
      accent: '147, 197, 84',
      icon: icon.grant,
      samples: [
        ['Research Grant Narrative', 'A technical case organized around the funder’s review criteria.', 'Document · 18 pages'],
        ['Specific Aims Package', 'Aims, rationale, feasibility, and impact aligned into one argument.', 'Document · 7 pages'],
        ['Work Plan and Milestones', 'The technical program translated into accountable tasks and evidence.', 'Document · 11 pages'],
        ['Commercialization Plan', 'A development path connecting technical milestones to market adoption.', 'Document · 15 pages'],
        ['Grant Resubmission', 'Reviewer objections converted into targeted technical revisions.', 'Document · 20 pages']
      ]
    },
    {
      id: 'patent-litigation',
      title: 'Patent Litigation',
      description: 'Technical analysis for counsel and expert review',
      accent: '218, 166, 88',
      icon: icon.litigation,
      samples: [
        ['Litigation Presentation', 'Technical evidence organized for counsel, experts, and formal proceedings.', 'Presentation · 30 slides'],
        ['Claim Construction Briefing', 'Disputed technical language mapped to the specification and evidence.', 'Presentation · 24 slides'],
        ['Prior-Art Technical Map', 'References, elements, and technical distinctions organized for review.', 'Report · 31 pages'],
        ['Expert Review Package', 'Complex engineering evidence converted into a traceable review record.', 'Report · 27 pages'],
        ['Infringement Analysis', 'Product behavior and claim elements compared through an explicit matrix.', 'Report · 19 pages']
      ]
    },
    {
      id: 'feasibility-assessments',
      title: 'Feasibility Assessments',
      description: 'Structured review of whether an idea works as described',
      accent: '171, 116, 207',
      icon: icon.feasibility,
      samples: [
        ['Feasibility Report', 'A review of the available evidence, assumptions, technical risks, and next steps.', 'Report · 18 pages'],
        ['Mechanism Assessment', 'A proposed mechanism tested against known constraints and available evidence.', 'Report · 21 pages'],
        ['Prototype Readiness Review', 'Open technical dependencies identified before prototype investment.', 'Report · 14 pages'],
        ['Evidence Gap Matrix', 'Claims mapped to support, uncertainty, and required verification work.', 'Report · 12 pages'],
        ['Development Roadmap', 'A staged technical path from concept to demonstrable system.', 'Report · 16 pages']
      ]
    },
    {
      id: 'technical-due-diligence',
      title: 'Technical Due Diligence',
      description: 'Technical review for investors, buyers, and other decision-makers',
      accent: '220, 114, 72',
      icon: icon.diligence,
      samples: [
        ['Technical Due Diligence', 'Technology, documentation, assumptions, and unresolved risk reviewed before commitment.', 'Report · 26 pages'],
        ['Evidence Audit', 'Core performance claims traced to their supporting evidence and limitations.', 'Report · 17 pages'],
        ['Engineering Risk Map', 'System-level risks ranked by consequence, evidence, and mitigation path.', 'Report · 20 pages'],
        ['Acquisition Review', 'Technical assets and liabilities organized for a transaction decision.', 'Report · 29 pages'],
        ['Independent Technology Review', 'A decision-grade review of mechanism, maturity, and execution risk.', 'Report · 23 pages']
      ]
    }
  ];

  const serviceGrid = document.querySelector('[data-service-grid]');
  const serviceTemplate = document.querySelector('#service-card-template');
  const sampleTemplate = document.querySelector('#sample-card-template');
  const sampleTrack = document.querySelector('[data-sample-track]');
  const sampleTray = document.querySelector('[data-sample-tray]');
  const activeServiceLabel = document.querySelector('[data-active-service-label]');
  const sampleViewport = document.querySelector('[data-sample-viewport]');
  let activeServiceIndex = 0;

  function routeForSample(serviceId, title) {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `/sample-work/${serviceId}/${slug}`;
  }

  function renderServices() {
    const fragment = document.createDocumentFragment();

    services.forEach((service, index) => {
      const node = serviceTemplate.content.firstElementChild.cloneNode(true);
      node.dataset.serviceId = service.id;
      node.style.setProperty('--accent-rgb', service.accent);
      node.setAttribute('aria-pressed', String(index === activeServiceIndex));
      node.querySelector('.service-icon').innerHTML = service.icon;
      node.querySelector('.service-title').textContent = service.title;
      node.querySelector('.service-description').textContent = service.description;
      node.addEventListener('click', () => activateService(index, true));
      fragment.appendChild(node);
    });

    serviceGrid.replaceChildren(fragment);
  }

  function renderSamples(service) {
    const fragment = document.createDocumentFragment();

    service.samples.forEach((sample, index) => {
      const node = sampleTemplate.content.firstElementChild.cloneNode(true);
      node.href = routeForSample(service.id, sample[0]);
      node.dataset.route = `sample:${service.id}:${index}`;
      node.querySelector('.sample-title').textContent = sample[0];
      node.querySelector('.sample-description').textContent = sample[1];
      node.querySelector('.sample-meta').textContent = sample[2];
      node.querySelector('.sample-art').style.backgroundImage = `url("${assets[index % assets.length]}")`;
      fragment.appendChild(node);
    });

    sampleTrack.replaceChildren(fragment);
    activeServiceLabel.textContent = service.title;
    sampleTrack.scrollTo({ left: 0, behavior: 'instant' });
  }

  function activateService(index, animate = false) {
    if (index < 0 || index >= services.length) return;
    activeServiceIndex = index;

    serviceGrid.querySelectorAll('.service-card').forEach((card, cardIndex) => {
      card.setAttribute('aria-pressed', String(cardIndex === index));
    });

    if (animate) {
      sampleTray.classList.add('is-entering');
      window.setTimeout(() => {
        renderSamples(services[index]);
        sampleTray.classList.remove('is-entering');
      }, 120);
    } else {
      renderSamples(services[index]);
    }

    sampleTray.dispatchEvent(new CustomEvent('intelluric:service-selected', {
      bubbles: true,
      detail: { service: services[index] }
    }));
  }

  function carouselStep(direction) {
    const firstCard = sampleTrack.querySelector('.sample-card');
    if (!firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(sampleTrack).columnGap || '12');
    sampleViewport.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth'
    });
    sampleTrack.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth'
    });
  }

  document.querySelector('[data-carousel-prev]').addEventListener('click', () => carouselStep(-1));
  document.querySelector('[data-carousel-next]').addEventListener('click', () => carouselStep(1));

  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', event => {
    const route = event.target.closest('[data-route]');
    if (!route) return;

    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');

    document.dispatchEvent(new CustomEvent('intelluric:navigate', {
      detail: {
        route: route.dataset.route,
        href: route.getAttribute('href'),
        source: route
      }
    }));
  });

  renderServices();
  renderSamples(services[activeServiceIndex]);
})();
