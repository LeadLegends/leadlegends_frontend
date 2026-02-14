import React, { useState } from 'react';
import { Mail, Linkedin, BarChart, PieChart, Zap, IndianRupee } from 'lucide-react';

// Dummy Data for Features
const featuresData = [
  {
    id: 'capture',
    icon: Mail,
    title: "Smart Lead Capture",
    desc: "Automatically connect emails and web forms. We extract contact details without manual entry.",
    mockupBg: "bg-blue-50",
    mockupContent: (
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-blue-100">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><Linkedin size={16} className="text-blue-600" /></div>
          <div><p className="font-semibold text-brand-navy">New Inquiry: Rahul Sharma</p><p className="text-xs text-gray-500">Source: LinkedIn • Added 2m ago</p></div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-blue-100 opacity-70">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><Mail size={16} className="text-green-600" /></div>
          <div><p className="font-semibold text-brand-navy">Email Open: Priya Inc.</p><p className="text-xs text-gray-500">Campaign #3 • Added 15m ago</p></div>
        </div>
      </div>
    )
  },
  {
    id: 'scoring',
    icon: Zap,
    title: "AI Win Probability (Static Demo)",
    desc: "Our AI models analyze 50+ signals to predict which leads are ready to buy right now.",
    mockupBg: "bg-green-50",
    mockupContent: (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center mb-4 relative">
          <Zap size={40} className="text-brand-green" />
          <span className="absolute top-0 right-0 flex h-4 w-4"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-4 w-4 bg-brand-green"></span></span>
        </div>
        <h3 className="text-4xl font-bold text-brand-navy mb-1">92% Score</h3>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">High Intent Signal</p>
        <div className="mt-6 text-xs text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-200">Adding this feature soon</div>
      </div>
    )
  },
  {
    id: 'pipeline',
    icon: PieChart,
    title: "Visual Pipeline",
    desc: "Drag-and-drop deals through stages. See your entire revenue forecast at a glance.",
    mockupBg: "bg-brand-beige",
    // For this feature we render an interactive demo component instead of static mockupContent.
  },
];

// Small interactive visual pipeline demo with drag-and-drop between two stages
const PipelineDemo = () => {
  const [columns, setColumns] = useState({
    qualified: [
      { id: 'deal-1', name: 'Acme Corp – Demo Scheduled', value: '18,000' },
      { id: 'deal-2', name: 'Nova Tech – Discovery Call', value: '9,500' },
    ],
    negotiation: [
      { id: 'deal-3', name: 'Pixel Labs – Proposal Sent', value: '32,000' },
    ],
  });

  const [dragging, setDragging] = useState(null); // { id, from }

  const handleDragStart = (dealId, from) => {
    setDragging({ id: dealId, from });
  };

  const handleDragEnd = () => {
    setDragging(null);
  };

  const handleDrop = (to) => {
    if (!dragging || dragging.from === to) return;

    setColumns((prev) => {
      const fromDeals = [...prev[dragging.from]];
      const toDeals = [...prev[to]];
      const index = fromDeals.findIndex((d) => d.id === dragging.id);
      if (index === -1) return prev;

      const [moved] = fromDeals.splice(index, 1);
      toDeals.unshift(moved);

      return {
        ...prev,
        [dragging.from]: fromDeals,
        [to]: toDeals,
      };
    });

    setDragging(null);
  };

  const renderColumn = (key, title, accentColor) => (
    <div
      className={`w-1/2 bg-white/60 rounded-xl border border-gray-200/70 p-3 space-y-3 transition-all duration-200 ${dragging && dragging.from !== key ? 'opacity-95' : ''
        }`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(key)}
    >
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-gray-500 ml-1 uppercase tracking-wide">
          {title}
        </div>
        <div className="text-[10px] text-gray-400">
          {columns[key].length} deal{columns[key].length !== 1 ? 's' : ''}
        </div>
      </div>
      {columns[key].map((deal) => {
        const isDragging = dragging?.id === deal.id;
        return (
          <div
            key={deal.id}
            draggable
            onDragStart={() => handleDragStart(deal.id, key)}
            onDragEnd={handleDragEnd}
            className={`bg-white p-3 rounded-lg border-l-4 ${accentColor} shadow-sm cursor-grab active:cursor-grabbing transition-all duration-200 transform ${isDragging
              ? 'scale-[1.03] shadow-xl ring-2 ring-brand-green/40 translate-y-0.5'
              : 'hover:shadow-md hover:-translate-y-0.5'
              }`}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-semibold text-brand-navy">{deal.name}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green">
                <IndianRupee size={12} />
                <span>{deal.value}</span>
              </span>
            </div>
            <p className="text-[10px] text-gray-400">
              Drag this card into another stage to see how deals move in your pipeline.
            </p>
          </div>
        );
      })}
      {columns[key].length === 0 && (
        <div className="text-[11px] text-gray-400 italic border border-dashed border-gray-200 rounded-lg p-2 text-center">
          Drop a deal here to move it into <span className="font-medium">{title}</span>.
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 flex flex-col gap-3 h-full">
      <div className="flex gap-3 h-3/4 overflow-hidden">
        {renderColumn('qualified', 'Qualified', 'border-blue-400')}
        {renderColumn('negotiation', 'Negotiation', 'border-brand-green')}
      </div>
      <div className="text-[11px] text-gray-500 bg-white/70 rounded-lg px-3 py-2 border border-gray-200/70">
        <span className="font-semibold text-brand-navy">Example:</span>{' '}
        Drag <span className="font-medium">“Acme Corp – Demo Scheduled”</span> from
        <span className="font-medium"> Qualified</span> into
        <span className="font-medium"> Negotiation</span> to simulate how your sales team
        moves deals between stages.
      </div>
    </div>
  );
};

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(featuresData[0].id);

  return (
    <section id="features" className="py-5 my-3 bg-white ">
      <div className="max-w-7xl mx-auto px-15">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Everything You Need to Close More Deals</h2>
          <p className="text-gray-500">Explore the powerful features built for modern sales teams.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Side: Tab Buttons */}
          <div className="lg:w-2/5 space-y-4">
            {featuresData.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${activeTab === feature.id
                  ? 'bg-brand-beige border-brand-navy/10 shadow-md scale-[1.02]'
                  : 'hover:bg-gray-50 border-transparent'
                  } border`}
              >
                <div className={`p-3 rounded-lg ${activeTab === feature.id ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-brand-navy/10 group-hover:text-brand-navy'} transition-colors`}>
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${activeTab === feature.id ? 'text-brand-navy' : 'text-gray-700'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${activeTab === feature.id ? 'text-gray-600' : 'text-gray-500'}`}>
                    {feature.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Mockup Display Area */}
          <div className="lg:w-3/5 h-[450px] relative">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 transition-all duration-500 ${feature.mockupBg} ${activeTab === feature.id ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0'
                  }`}
              >
                {/* Fake Browser Header */}
                <div className="h-8 bg-white/80 border-b border-gray-100 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
                {/* Content */}
                <div className="h-[calc(100%-32px)]">
                  {feature.id === 'pipeline' ? <PipelineDemo /> : feature.mockupContent}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;