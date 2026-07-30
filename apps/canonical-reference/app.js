(() => {
  'use strict';

  const assets = [
    'assets/sample-investor.jpg',
    'assets/sample-research.jpg',
    'assets/sample-feasibility.jpg',
    'assets/sample-litigation.jpg'
  ];

  const serviceSamples = {
    pitch: [
      ['Technical Investor Deck', 'A complex platform explained for a nontechnical investment audience.', 'Presentation · 16 slides'],
      ['Turbulence Sensor Pitch', 'A real-time sensing platform organized for a specialist investment audience.', 'Presentation · 14 slides'],
      ['Neurotechnology Platform', 'A closed-loop therapeutic platform translated into a decision-ready narrative.', 'Presentation · 18 slides'],
      ['Industrial Systems Pitch', 'An engineering platform framed around deployment, risk, and commercial value.', 'Presentation · 12 slides']
    ],
    irb: [
      ['Research Proposal', 'A study protocol organized for scientific and ethics review.', 'Document · 22 pages'],
      ['Risk and Safeguards Plan', 'Participant risk, monitoring, and safeguards made explicit for review.', 'Document · 12 pages'],
      ['Protocol Amendment', 'A revised study design with rationale, deltas, and updated procedures.', 'Document · 9 pages'],
      ['Consent Materials', 'Participant-facing information aligned to the approved research protocol.', 'Document · 8 pages']
    ],
    grant: [
      ['Research Grant Narrative', 'A technical case organized around the funder’s review criteria.', 'Document · 18 pages'],
      ['Specific Aims Package', 'Aims, rationale, feasibility, and impact aligned into one argument.', 'Document · 7 pages'],
      ['Work Plan and Milestones', 'The technical program translated into accountable tasks and evidence.', 'Document · 11 pages'],
      ['Commercialization Plan', 'A development path connecting technical milestones to market adoption.', 'Document · 15 pages']
    ],
    patent: [
      ['Litigation Presentation', 'Technical evidence organized for counsel, experts, and formal proceedings.', 'Presentation · 30 slides'],
      ['Claim Construction Briefing', 'Disputed technical language mapped to the specification and evidence.', 'Presentation · 24 slides'],
      ['Prior-Art Technical Map', 'References, elements, and technical distinctions organized for review.', 'Report · 31 pages'],
      ['Expert Review Package', 'Complex engineering evidence converted into a traceable review record.', 'Report · 27 pages']
    ],
    feasibility: [
      ['Feasibility Report', 'A review of the available evidence, assumptions, technical risks, and next steps.', 'Report · 18 pages'],
      ['Mechanism Assessment', 'A proposed mechanism tested against known constraints and available evidence.', 'Report · 21 pages'],
      ['Prototype Readiness Review', 'Open technical dependencies identified before prototype investment.', 'Report · 14 pages'],
      ['Evidence Gap Matrix', 'Claims mapped to support, uncertainty, and required verification work.', 'Report · 12 pages']
    ],
    diligence: [
      ['Technical Due Diligence', 'Technology, documentation, assumptions, and unresolved risk reviewed before commitment.', 'Report · 26 pages'],
      ['Evidence Audit', 'Core performance claims traced to their supporting evidence and limitations.', 'Report · 17 pages'],
      ['Engineering Risk Map', 'System-level risks ranked by consequence, evidence, and mitigation path.', 'Report · 20 pages'],
      ['Acquisition Review', 'Technical assets and liabilities organized for a transaction decision.', 'Report · 29 pages']
    ]
  };

  const cards = [...document.querySelectorAll('.service-card')];
  const grid = document.querySelector('#sample-grid');
  const tray = document.querySelector('.sample-tray');
  const heading = document.querySelector('.tray-heading b');

  const escapeHtml = value => value.replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[character]));
  function renderSamples(serviceId, serviceLabel) {
    const samples = serviceSamples[serviceId] || serviceSamples.pitch;
    grid.innerHTML = samples.map((sample, index) => {
      const [title, description, meta] = sample;
      return `<a class="sample-card" href="#fixture-action" data-action-id="sample-${serviceId}-${index + 1}">
        <span class="sample-text"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><small>${escapeHtml(meta)}</small></span>
        <img src="${assets[index % assets.length]}" alt="" aria-hidden="true" />
      </a>`;
    }).join('');
    heading.textContent = 'SAMPLE WORK';
    tray.setAttribute('aria-label', `${serviceLabel} sample work`);
    grid.scrollTo({ left: 0, behavior: 'auto' });
  }

  function selectService(card) {
    cards.forEach(candidate => {
      const selected = candidate === card;
      candidate.classList.toggle('active', selected);
      candidate.setAttribute('aria-pressed', String(selected));
    });
    renderSamples(card.dataset.service, card.querySelector('b').textContent.trim());
  }

  cards.forEach(card => {
    card.setAttribute('aria-pressed', String(card.classList.contains('active')));
    card.addEventListener('click', () => selectService(card));
  });

  const scrollSamples = direction => {
    const first = grid.querySelector('.sample-card');
    if (!first) return;
    const gap = Number.parseFloat(getComputedStyle(grid).columnGap || '15');
    grid.scrollBy({ left: direction * (first.getBoundingClientRect().width + gap), behavior: 'smooth' });
  };

  document.querySelector('.carousel-arrow.right').addEventListener('click', () => scrollSamples(1));
  document.querySelector('.carousel-arrow.left').addEventListener('click', () => scrollSamples(-1));
  grid.tabIndex = 0;
  grid.setAttribute('aria-label', 'Sample work carousel');
  grid.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollSamples(1);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollSamples(-1);
    }
  });

  document.addEventListener('click', event => {
    const action = event.target.closest('a[data-action-id]');
    if (action) event.preventDefault();
  });
})();
