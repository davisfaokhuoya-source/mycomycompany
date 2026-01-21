const CONFIG = {
    GOOGLE_URL: 
    'https://script.google.com\
owKx1zJp705qcXLKcYCNo98g/exec', 
    WHATSAPP: '2358055538518',
    // This will be updated automatically on load
    EXCHANGE_RATE_USD_NGN: 1420.00 // Fallback/Placeholder rate
};
const data = {
    fixed: [
    { name: "Business Name Reg", price: 30000 },
    { name: "NGO & Associations", price: 150000 },
    { name: "Tax ID (TIN)", price: 10000 },
    { name: "Annual Filing", price: 25000 },
    { name: "Change of Name (CAC)", price: 25000 },
    { name: "Trade Mark Registration", price: 80000 }
    ],
    variable: [
    { id: 'comp_reg', name: "Company Registration", base: 60000, step: 30000, unit: "Per 1M \
Share" },
    { id: 'ctc', name: "Certified True Copies", base: 10500, step: 10500, unit: "Per Document" 
    },
    { id: 'profile', name: "Company Profile", base: 40000, step: 4000, unit: "Per Page (Min \
10)", min: 10 },
    { id: 'Email', name: "Email Campaign Service", base: 30000, step: 30000, unit: "Per Week \
(Min 1 Week plus 10% Campaign Budget)", min: 1 },
    { id: 'Social', name: "Social Media Campaign", base: 30000, step: 30000, unit: "Per Week \
(Min 1 Week plus 10% Campaign Budget)", min: 1 },
    { id: 'Social', name: "Social Media Management", base: 40000, step: 30000, unit: "Per \
Week (Min 1 Week)", min: 1 },
    { id: 'Graphics', name: "Graphics Design Service", base: 10000, step: 10000, unit: "1 \
Design (Min 1)", min: 1 }
    ],
    quotes: [
    "Document Submission & Follow-up",
    "General Contract", 
    "Printing and Branding", 
    "Construction & Infrastructural Projects", 
    "Training & Capacity Building", 
    "Web Development"
    ]
};
let selections = { paid: {}, quotes: [] };
// Function to fetch the latest exchange rate from a free API
async function fetchExchangeRate() {
    try {
    // Using exchangerate.host which does not require an API key for basic usage
    const response = await fetch('https://api.exchangerate.host');
    const rates = await response.json();
    if (rates && rates.rates && rates.rates.NGN) {
    CONFIG.EXCHANGE_RATE_USD_NGN = rates.rates.NGN;
    document.getElementById('rateDisclaimer').innerText = `Current rate: $1 USD ≈ \
₦${CONFIG.EXCHANGE_RATE_USD_NGN.toFixed(2)} NGN`;
    }
    } catch (error) {
    console.error("Could not fetch live exchange rate, using fallback rate.", error);
    document.getElementById('rateDisclaimer').innerText = `Using fallback rate: $1 USD ≈ \
₦${CONFIG.EXCHANGE_RATE_USD_NGN.toFixed(2)} NGN`;
    }
    // Re-render UI after rate is fetched
    init();
    render(); 
}
function init() {
    // Clear containers before re-rendering (important if init is called multiple times)
    document.getElementById('fixed-services').innerHTML = '<h3 class="font-bold text-xs text\
-slate-400 uppercase tracking-widest mb-3">Flat Rate Services</h3>';
    document.getElementById('variable-services').innerHTML = '<h3 class="font-bold text-xs \
text-slate-400 uppercase tracking-widest mb-3">Scalable Services</h3>';
    document.getElementById('quote-services').innerHTML = '';
    data.fixed.forEach(s => {
    const usdPrice = (s.price / CONFIG.EXCHANGE_RATE_USD_NGN).toFixed(2);
    document.getElementById('fixed-services').innerHTML += `
<label class="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl \
cursor-pointer transition">
<span class="text-sm font-semibold text-slate-700">${s.name} <br><small \
class="text-brand-gold-dark font-bold text-[9px]">(₦${s.price.toLocaleString()} / \
$${usdPrice})</small></span>
<input type="checkbox" onchange="toggleFixed('${s.name}', ${s.price})" class="w-5 \
h-5 accent-gold" ${selections.paid[s.name] ? 'checked' : ''}>
</label>`;
    });
    data.variable.forEach(s => {
    document.getElementById('variable-services').innerHTML += `
<div class="p-3 bg-slate-50/50 rounded-xl border border-slate-100">
<label class="text-xs font-bold text-slate-500 uppercase tracking\
tight">${s.name}</label>
<div class="flex items-center gap-3 mt-2">
<input type="number" min="0" 
value="${(Object.keys(selections.paid).includes(s.name) && s.id !== 'profile') ? 1 : 0}" 
onchange="updateVar('${s.id}','${s.name}',this.value,${s.base},${s.step})" class="w-20 p-2 \
border rounded-lg text-sm bg-white font-bold text-brand-blue outline-none border-slate-200">
<span class="text-[10px] text-slate-400 font-medium">${s.unit}</span>
</div>
</div>`;
    });
    data.quotes.forEach(q => {
    document.getElementById('quote-services').innerHTML += `
<label class="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl \
cursor-pointer hover:border-brand-gold hover:shadow-md transition-all group">
<input type="checkbox" onchange="toggleQuote('${q}')" class="w-6 h-6 accent-gold" \
${selections.quotes.includes(q) ? 'checked' : ''}>
<span class="text-sm font-bold text-slate-700 group-hover:text-brand\
blue">${q}</span>
</label>`;
    });
}
// Toggling functions updated to call render() at the end
function toggleFixed(name, price) {
    if (selections.paid[name]) delete selections.paid[name];
    else selections.paid[name] = price;
    render();
}
function updateVar(id, name, val, base, step) {
    val = parseInt(val);
    if (isNaN(val) || val <= 0) { // Ensure val is a valid, positive number
        delete selections.paid[name];
    } else {
        // Updated logic to ensure correct cost calculation for 'profile' minimum
        let cost = (id === 'profile') ? (val < 10 ? 40000 : val * 4000) : base + (val - 1) * step;
        selections.paid[name] = cost;
    }
    render();
}
function toggleQuote(name) {
    const index = selections.quotes.indexOf(name);
    if (index > -1) selections.quotes.splice(index, 1);
    else selections.quotes.push(name);
    render();
}
function render() {
    const list = document.getElementById('selectedList');
    let totalNGN = 0;
    list.innerHTML = "";
    Object.keys(selections.paid).forEach(k => {
    totalNGN += selections.paid[k];
    list.innerHTML += `<div class="flex justify-between items-center text-blue-50 border-b \
border-white/5 pb-1">
<span>${k}</span>
<span class="font-bold">₦${selections.paid[k].toLocaleString()}</span>
</div>`;
    });
    selections.quotes.forEach(q => {
    list.innerHTML += `<div class="flex justify-between items-center text-brand-gold border-b \
border-white/5 pb-1">
<span class="font-medium">${q}</span>
<span class="text-[10px] font-black border border-brand-gold px-1 \
rounded">QUOTE</span>
</div>`;
    });
    document.getElementById('totalDisplayNGN').innerText = `₦${totalNGN.toLocaleString()}`;
    document.getElementById('totalDisplayUSD').innerText = `$${(totalNGN / 
    CONFIG.EXCHANGE_RATE_USD_NGN).toFixed(2)}`;
    if (totalNGN === 0 && selections.quotes.length === 0) {
    list.innerHTML = `<p class="text-blue-300/50 italic text-center py-2">No items \
selected</p>`;
    }
}
document.getElementById('bookingForm').onsubmit = async (e) => {
    e.preventDefault();
    const payload = {
    formType: 'service_request',
    name: document.getElementById('clientName').value,
    phone: document.getElementById('clientPhone').value,
    whatsapp: document.getElementById('clientWhatsapp').value,
    email: document.getElementById('clientEmail').value,
    services: Object.keys(selections.paid).join(", ") || "None",
    total: document.getElementById('totalDisplayNGN').innerText,
    quotes: selections.quotes.join(", ") || "None"
    };
    // 1. Log to Google Sheet
    try {
    fetch(CONFIG.GOOGLE_URL, { 
    method: 'POST', 
    mode: 'no-cors', 
    cache: 'no-cache',
    body: JSON.stringify(payload) 
    });
    } catch (err) { console.error("Sheet Error:", err); }
    // 2. Prepare WhatsApp Message
    const msg = `*NEW SERVICE REQUEST - THE VICTORIAS LTD*%0A-----------------------------------\
%0A-%0A*Name:* ${payload.name}%0A*Phone:* ${payload.phone}%0A*WhatsApp:* \
${payload.whatsapp}%0A*Email:* ${payload.email}%0A------------------------------------%0A*Paid \
Services:* ${payload.services}%0A*Variable/Quote Items:* ${payload.quotes}%0A*Estimated \
Price:* ${payload.total}%0A------------------------------------%0A_Sent via Online Portal_`;
    window.open(`https://wa.me{msg}`, '_blank');
};
// Initial call to fetch rates and populate the UI
fetchExchangeRate();
