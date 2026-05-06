// Mock data for the static demo

export const COMMODITY_TYPES = {
  raw_materials: {
    label: "Raw Materials",
    materials: {
      argan_oil: { name: "Argan Oil", flag: "\u{1F1F2}\u{1F1E6}", basePrice: 52, unit: "€/kg" },
      shea_butter: { name: "Shea Butter", flag: "\u{1F1E7}\u{1F1EB}", basePrice: 9.2, unit: "€/kg" },
      rose_extract: { name: "Rose Extract", flag: "\u{1F1E7}\u{1F1EC}", basePrice: 410, unit: "€/kg" },
      jojoba_oil: { name: "Jojoba Oil", flag: "\u{1F1FA}\u{1F1F8}", basePrice: 18, unit: "€/kg" },
      vanilla: { name: "Vanilla", flag: "\u{1F1F2}\u{1F1EC}", basePrice: 320, unit: "€/kg" },
      palmarosa_oil: { name: "Palmarosa Oil", flag: "\u{1F1EE}\u{1F1F3}", basePrice: 33, unit: "€/kg" },
    },
  },
  electricity: {
    label: "Electricity & Energy",
    materials: {
      baseload_de: { name: "Baseload Power DE", flag: "\u{1F1E9}\u{1F1EA}", basePrice: 87, unit: "€/MWh" },
      peak_fr: { name: "Peak Power FR", flag: "\u{1F1EB}\u{1F1F7}", basePrice: 112, unit: "€/MWh" },
      offpeak_nl: { name: "Off-Peak NL", flag: "\u{1F1F3}\u{1F1F1}", basePrice: 64, unit: "€/MWh" },
      renewable_certs: { name: "Renewable Certificates", flag: "\u{1F33F}", basePrice: 3.2, unit: "€/cert" },
      natural_gas_ttf: { name: "Natural Gas TTF", flag: "\u{1F525}", basePrice: 34.5, unit: "€/MWh" },
      carbon_eu_ets: { name: "Carbon Credits EU ETS", flag: "\u{1F30D}", basePrice: 68, unit: "€/tCO2" },
    },
  },
};

function generatePriceHistory(basePrice, count = 50) {
  const history = [];
  let price = basePrice * (0.92 + Math.random() * 0.08);
  for (let i = 0; i < count; i++) {
    price += price * (Math.random() - 0.48) * 0.015;
    price = Math.max(price * 0.7, Math.min(price * 1.3, price));
    history.push(parseFloat(price.toFixed(2)));
  }
  return history;
}

const RAW_MATERIALS_NEWS = [
  { headline: "Record drought in Morocco: argan cooperatives cut yield forecasts by 25%", region: "morocco", materials: ["argan_oil"], severity: "high", source: "AFP Rabat", category: "Weather" },
  { headline: "Ghana's Tema port returns to normal after 3 weeks of congestion", region: "west_africa", materials: ["shea_butter"], severity: "low", source: "Reuters Accra", category: "Logistics" },
  { headline: "Cyclone Anjalay: Madagascar on red alert, vanilla harvest under threat", region: "madagascar", materials: ["vanilla"], severity: "high", source: "Meteo-France", category: "Weather" },
  { headline: "EUR/USD steady at 1.085, no notable impact on dollar-denominated purchases", region: "global", materials: ["jojoba_oil"], severity: "low", source: "Bloomberg FX", category: "Currency" },
  { headline: "Bulgaria announces exceptional rosa damascena harvest for 2025", region: "bulgaria", materials: ["rose_extract"], severity: "low", source: "Novinite Sofia", category: "Harvest" },
  { headline: "Political instability in Burkina Faso: roads to Ouagadougou disrupted", region: "burkina_faso", materials: ["shea_butter"], severity: "elevated", source: "RFI Africa", category: "Geopolitics" },
  { headline: "Indian monsoon delayed by 10 days, moderate impact on palmarosa", region: "india", materials: ["palmarosa_oil"], severity: "moderate", source: "India Met Dept", category: "Weather" },
  { headline: "Maritime freight rates up 40% on Indian Ocean routes", region: "indian_ocean", materials: ["vanilla", "palmarosa_oil"], severity: "elevated", source: "Drewry Shipping", category: "Logistics" },
  { headline: "Morocco unlocks 500M MAD agricultural emergency fund for drought relief", region: "morocco", materials: ["argan_oil"], severity: "high", source: "MAP Rabat", category: "Geopolitics" },
  { headline: "New EU quality standard for essential oils, limited impact on certified suppliers", region: "europe", materials: ["rose_extract", "palmarosa_oil"], severity: "low", source: "European Commission", category: "Regulation" },
  { headline: "Global demand for natural ingredients up 8% in Q1 2025", region: "global", materials: ["argan_oil", "shea_butter", "jojoba_oil"], severity: "moderate", source: "Cosmetics Business", category: "Market" },
  { headline: "Moroccan argan cooperatives report 30% lower nut yields", region: "morocco", materials: ["argan_oil"], severity: "high", source: "Cooperative Targanine", category: "Supplier" },
  { headline: "Bourbon vanilla hits EUR 320/kg, highest in 6 months", region: "madagascar", materials: ["vanilla"], severity: "high", source: "Spice Trade Weekly", category: "Market" },
  { headline: "Arizona sees record rainfall, good news for jojoba yields", region: "usa", materials: ["jojoba_oil"], severity: "low", source: "Arizona Republic", category: "Weather" },
  { headline: "Vanilla forward contracts trading at 8% premium to spot", region: "madagascar", materials: ["vanilla"], severity: "moderate", source: "Spice Futures Desk", category: "Market" },
];

const ELECTRICITY_NEWS = [
  { headline: "German wind generation hits record 58 GW, spot prices collapse to 12 EUR/MWh", region: "germany", materials: ["baseload_de"], severity: "high", source: "ENTSO-E", category: "Generation" },
  { headline: "French nuclear fleet back to 85% availability after maintenance season", region: "france", materials: ["peak_fr"], severity: "low", source: "EDF", category: "Generation" },
  { headline: "Dutch TTF gas futures spike 12% on LNG cargo rerouting", region: "netherlands", materials: ["natural_gas_ttf", "offpeak_nl"], severity: "high", source: "ICE Endex", category: "Market" },
  { headline: "EU carbon allowances tighten as Market Stability Reserve kicks in", region: "europe", materials: ["carbon_eu_ets"], severity: "elevated", source: "Carbon Pulse", category: "Regulation" },
  { headline: "Interconnector capacity between DE and FR reduced for maintenance", region: "europe", materials: ["baseload_de", "peak_fr"], severity: "moderate", source: "ENTSO-E", category: "Grid" },
  { headline: "Renewable certificate demand surges as corporate PPAs accelerate", region: "europe", materials: ["renewable_certs"], severity: "moderate", source: "Montel", category: "Market" },
  { headline: "Norwegian hydro reservoirs at 15-year high, bearish for Nordic prices", region: "nordics", materials: ["offpeak_nl"], severity: "low", source: "NordPool", category: "Generation" },
  { headline: "Cold snap forecast for Central Europe next week, demand spike expected", region: "europe", materials: ["baseload_de", "natural_gas_ttf"], severity: "elevated", source: "Maxar Weather", category: "Weather" },
  { headline: "Belgium approves 10-year nuclear extension, calming capacity concerns", region: "europe", materials: ["baseload_de", "peak_fr"], severity: "low", source: "Belga", category: "Regulation" },
  { headline: "Spain solar curtailment reaches new high as midday oversupply grows", region: "spain", materials: ["renewable_certs"], severity: "low", source: "REE", category: "Generation" },
  { headline: "UK-NL BritNed cable outage extends through end of month", region: "europe", materials: ["offpeak_nl"], severity: "elevated", source: "National Grid", category: "Grid" },
  { headline: "EU proposes tighter 2030 emissions cap, carbon credits rally 4%", region: "europe", materials: ["carbon_eu_ets"], severity: "high", source: "European Commission", category: "Regulation" },
  { headline: "German industrial demand down 3% YoY as manufacturing slows", region: "germany", materials: ["baseload_de"], severity: "low", source: "BDEW", category: "Demand" },
  { headline: "LNG spot rates from US to EU drop 20% as shipping bottleneck clears", region: "global", materials: ["natural_gas_ttf"], severity: "low", source: "Platts", category: "Logistics" },
  { headline: "French peak hour spread widens to 45 EUR/MWh on low wind forecast", region: "france", materials: ["peak_fr"], severity: "moderate", source: "EPEX Spot", category: "Market" },
];

const RAW_MATERIALS_COLLAB = {
  thread_id: "COLLAB-A7F2E91B",
  material: "argan_oil",
  trigger: { headline: "Record drought in Morocco: argan cooperatives cut yield forecasts by 25%" },
  trigger_summary: "Record drought in Morocco: argan cooperatives cut yield forecasts by 25%",
  started_at: new Date(Date.now() - 180000).toISOString(),
  status: "complete",
  steps: [
    {
      step: 1, agent: "Market Intelligence Agent", model: "azure-gpt-4o", model_provider: "Azure OpenAI (via LiteLLM)",
      started_at: new Date(Date.now() - 170000).toISOString(),
      completed_at: new Date(Date.now() - 162000).toISOString(),
      output: {
        fair_price_eur: 48.50, current_vs_fair: "above", premium_pct: 7.6,
        trend: "rising", momentum_strength: "strong", volatility: "high",
        fx_note: "MAD/EUR relatively stable, minimal FX impact",
        analysis: "Argan oil spot price has moved significantly above the 30-day fair value of 48.50 EUR/kg. The drought in Morocco is driving aggressive buying, pushing prices 7.6% above fair value with strong upward momentum. Volatility is elevated as market participants rush to secure supply."
      },
    },
    {
      step: 2, agent: "Risk & Web Intelligence Agent", model: "gemini-2.5-flash", model_provider: "Google Gemini (via LiteLLM)",
      started_at: new Date(Date.now() - 160000).toISOString(),
      completed_at: new Date(Date.now() - 150000).toISOString(),
      output: {
        risk_score: 8, risk_level: "high", supply_disruption_pct: 25,
        lead_time_impact_days: 14, affected_regions: ["Morocco", "North Africa"],
        alternative_sources: "Limited alternatives; Israel and Mexico produce small quantities but cannot absorb 25% shortfall",
        key_risk_factors: ["25% yield reduction confirmed by cooperatives", "Emergency government fund signals severity", "Drought expected to persist 3-6 months"],
        analysis: "Supply disruption risk is high. The 25% yield reduction is confirmed across multiple cooperatives, and the Moroccan government's emergency fund response signals this is not a localized issue. Lead times will extend as buyers compete for reduced output."
      },
    },
    {
      step: 3, agent: "Procurement Advisor Agent", model: "azure-gpt-4o", model_provider: "Azure OpenAI (via LiteLLM)",
      started_at: new Date(Date.now() - 148000).toISOString(),
      completed_at: new Date(Date.now() - 138000).toISOString(),
      output: {
        action: "buy_partial", urgency: "high", suggested_pct_of_forecast: 35,
        target_price_eur: 52.00, market_fulfillment_score: 5,
        fulfillment_risk_pct: 30, timing_window: "next 3-5 days",
        rationale: "With confirmed 25% supply disruption and rising momentum, we recommend securing 35% of quarterly forecast immediately. Prices are above fair value but the supply constraint justifies the premium. Waiting risks further price escalation and allocation shortfalls. The market can still fulfill orders now, but fulfillment risk will increase as other buyers react to the drought news."
      },
    },
  ],
};

const ELECTRICITY_COLLAB = {
  thread_id: "COLLAB-E4B8C2D1",
  material: "natural_gas_ttf",
  trigger: { headline: "Dutch TTF gas futures spike 12% on LNG cargo rerouting" },
  trigger_summary: "Dutch TTF gas futures spike 12% on LNG cargo rerouting",
  started_at: new Date(Date.now() - 120000).toISOString(),
  status: "complete",
  steps: [
    {
      step: 1, agent: "Market Intelligence Agent", model: "azure-gpt-4o", model_provider: "Azure OpenAI (via LiteLLM)",
      started_at: new Date(Date.now() - 115000).toISOString(),
      completed_at: new Date(Date.now() - 107000).toISOString(),
      output: {
        fair_price_eur: 31.20, current_vs_fair: "above", premium_pct: 10.6,
        trend: "rising", momentum_strength: "strong", volatility: "extreme",
        fx_note: "EUR/USD movements amplifying dollar-priced LNG impact",
        analysis: "TTF front-month has spiked 12% in a single session due to LNG cargo diversions. Current spot at 34.50 EUR/MWh is 10.6% above the 30-day fair value. Extreme volatility as the market reprices supply expectations. Forward curve shows backwardation suggesting market expects normalization within 4-6 weeks."
      },
    },
    {
      step: 2, agent: "Risk & Web Intelligence Agent", model: "gemini-2.5-flash", model_provider: "Google Gemini (via LiteLLM)",
      started_at: new Date(Date.now() - 105000).toISOString(),
      completed_at: new Date(Date.now() - 95000).toISOString(),
      output: {
        risk_score: 7, risk_level: "elevated", supply_disruption_pct: 15,
        lead_time_impact_days: 7, affected_regions: ["Northwest Europe", "Netherlands"],
        alternative_sources: "Pipeline flows from Norway stable; storage levels at 72% provide 3-week buffer at current withdrawal rates",
        key_risk_factors: ["3 LNG cargoes rerouted to Asia on higher spot prices", "Cold snap forecast adding demand pressure", "Storage withdrawal rates above seasonal average"],
        analysis: "The supply disruption is real but likely temporary. European storage at 72% provides buffer, and Norwegian pipeline flows remain steady. However, if the cold snap materializes next week alongside continued LNG diversions, prices could test 38-40 EUR/MWh before correcting."
      },
    },
    {
      step: 3, agent: "Procurement Advisor Agent", model: "azure-gpt-4o", model_provider: "Azure OpenAI (via LiteLLM)",
      started_at: new Date(Date.now() - 93000).toISOString(),
      completed_at: new Date(Date.now() - 83000).toISOString(),
      output: {
        action: "hedge", urgency: "high", suggested_pct_of_forecast: 50,
        target_price_eur: 33.00, market_fulfillment_score: 7,
        fulfillment_risk_pct: 15, timing_window: "next 48 hours",
        rationale: "Recommend hedging 50% of next month's gas exposure via forward contracts. The spike is driven by temporary LNG rerouting, and the forward curve suggests mean reversion. However, the cold snap risk warrants protecting against further upside. Lock in forwards at current levels rather than waiting, as spot could test 38+ if weather forecasts verify. Market can fulfill but timing is critical before other utilities hedge."
      },
    },
  ],
};

function buildMaterialSummary(type) {
  const config = COMMODITY_TYPES[type];
  const actions = ["buy_now", "buy_partial", "hold", "hedge", "escalate", "diversify"];
  const urgencies = ["low", "medium", "high"];
  const severities = ["low", "moderate", "elevated", "high"];
  const news = type === "raw_materials" ? RAW_MATERIALS_NEWS : ELECTRICITY_NEWS;

  return Object.entries(config.materials).map(([key, mat]) => {
    const history = generatePriceHistory(mat.basePrice);
    const current = history[history.length - 1];
    const prev = history[history.length - 2];
    const changePct = ((current - prev) / prev) * 100;
    const relatedNews = news.filter(n => n.materials.includes(key));
    const riskItem = relatedNews.find(n => n.severity === "high" || n.severity === "elevated");

    return {
      material: key,
      display_name: mat.name,
      current_price_eur: current,
      price_change_pct: changePct,
      price_momentum: changePct > 0.5 ? "rising" : changePct < -0.5 ? "declining" : "stable",
      price_history: history,
      risk_severity: riskItem ? riskItem.severity : "low",
      risk_headline: riskItem ? riskItem.headline : null,
      latest_recommendation: actions[Math.floor(Math.random() * 4)],
      recommendation_urgency: urgencies[Math.floor(Math.random() * 3)],
      commentary: null,
      commentary_timestamp: null,
      inventory_coverage_weeks: 4 + Math.random() * 8,
      active_contracts: Math.floor(Math.random() * 3) + 1,
    };
  });
}

let cachedSummaries = {};

export function getDashboardData(type) {
  if (!cachedSummaries[type]) {
    cachedSummaries[type] = buildMaterialSummary(type);
  }
  return { materials: cachedSummaries[type], updated_at: new Date().toISOString() };
}

export function getNewsData(type, limit = 30) {
  const items = type === "raw_materials" ? RAW_MATERIALS_NEWS : ELECTRICITY_NEWS;
  return {
    news: items.slice(0, limit).map((n, i) => ({
      ...n,
      news_id: `NEWS-${type.slice(0, 3).toUpperCase()}${String(i).padStart(3, "0")}`,
      affected_materials: n.materials,
      timestamp: new Date(Date.now() - i * 45000).toISOString(),
    })),
  };
}

export function getCollaborationData() {
  return { threads: [RAW_MATERIALS_COLLAB, ELECTRICITY_COLLAB] };
}

export function getRecommendationData() {
  return { recommendations: [] };
}

export function generatePriceTick(type) {
  const config = COMMODITY_TYPES[type];
  const keys = Object.keys(config.materials);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const mat = config.materials[key];

  const summary = cachedSummaries[type];
  if (!summary) return null;

  const item = summary.find(m => m.material === key);
  if (!item) return null;

  const change = item.current_price_eur * (Math.random() - 0.48) * 0.008;
  const newPrice = parseFloat((item.current_price_eur + change).toFixed(2));
  const changePct = ((newPrice - item.current_price_eur) / item.current_price_eur) * 100;

  item.current_price_eur = newPrice;
  item.price_history.push(newPrice);
  if (item.price_history.length > 50) item.price_history.shift();
  item.price_change_pct = changePct;
  item.price_momentum = changePct > 0.3 ? "rising" : changePct < -0.3 ? "declining" : "stable";

  return {
    event_type: "price_update",
    source: "MarketIntelligenceAgent",
    topic: `sam/procurement/market/${key}`,
    material: key,
    price_eur_per_kg: newPrice,
    previous_price_eur: newPrice - change,
    change_pct: changePct,
    momentum: item.price_momentum,
    timestamp: new Date().toISOString(),
  };
}

export function generateNewsEvent(type) {
  const items = type === "raw_materials" ? RAW_MATERIALS_NEWS : ELECTRICITY_NEWS;
  const item = items[Math.floor(Math.random() * items.length)];
  return {
    event_type: "news",
    source: "RiskWebIntelligenceAgent",
    topic: `sam/procurement/risk/${item.materials[0]}`,
    news_id: `NEWS-${Date.now().toString(36).toUpperCase()}`,
    headline: item.headline,
    category: item.category,
    region: item.region,
    affected_materials: item.materials,
    severity: item.severity,
    source_name: item.source,
    timestamp: new Date().toISOString(),
  };
}

export function generateCommentary(type) {
  const config = COMMODITY_TYPES[type];
  const keys = Object.keys(config.materials);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const mat = config.materials[key];

  const commentaries = type === "raw_materials" ? [
    `${mat.name} showing strong upward pressure. Current levels are 5-8% above 30-day average. Consider partial coverage if exposure is unhedged.`,
    `${mat.name} market stabilizing after last week's volatility. Spot is near fair value. Hold current positions and watch for buying opportunities on dips.`,
    `${mat.name} fundamentals remain tight. Supply constraints in key regions suggest prices could move higher. Recommend accelerating Q3 coverage.`,
    `${mat.name} softening on improved supply outlook. Seasonal demand easing. Good window to lock in forward contracts at current levels.`,
  ] : [
    `${mat.name} spot prices elevated on tight supply-demand balance. Forward curve in backwardation suggests temporary premium. Consider locking forwards for Q2 delivery.`,
    `${mat.name} trading below seasonal norms on high renewable output. Take advantage of low prices to extend coverage for next quarter.`,
    `${mat.name} volatility spiking on weather uncertainty. Recommend hedging 60% of near-term exposure via options to cap downside risk.`,
    `${mat.name} consolidating after recent rally. Market awaiting clarity on storage levels and demand forecasts. Maintain current positions.`,
  ];

  return {
    event_type: "commentary",
    source: "ProcurementAdvisorAgent",
    topic: `sam/procurement/advice/${key}`,
    material: key,
    commentary: commentaries[Math.floor(Math.random() * commentaries.length)],
    price_at_comment: cachedSummaries[type]?.find(m => m.material === key)?.current_price_eur || mat.basePrice,
    momentum: "stable",
    timestamp: new Date().toISOString(),
  };
}

export const INVOICE_SUGGESTIONS = [
  "Argan Oil", "Shea Butter", "Rose Extract", "Jojoba Oil", "Vanilla",
  "Palmarosa Oil", "Coconut Oil", "Almond Oil", "Lavender Oil",
  "Baseload Power", "Peak Power", "Off-Peak Power", "Natural Gas",
  "Carbon Credits", "Renewable Certificates", "Solar PPA",
  "Wind PPA", "Biomass Pellets", "Green Hydrogen", "Battery Storage",
];
