/* A History of Alphington — content.
   Every substantive claim carries a source link. Confidence is flagged inline:
   .tag.sourced = documented in a citable source
   .tag.legend  = local tradition / anecdote, not documented
   .tag.uncertain = sources conflict or claim is unverified
*/

const SECTIONS = [

/* ───────────────────────── OVERVIEW ───────────────────────── */
{
  id: 'overview',
  label: 'Overview',
  render: () => `
    <div class="hero">
      <div class="eyebrow">Alphington · Victoria · 3078</div>
      <h2>A History of Alphington</h2>
      <p>A riverside village on the Birrarung (Yarra), named by a Devon-born lawyer, shaped by wool merchants and market gardeners, industrialised by a paper mill and now being remade as YarraBend. This is its story — with a close focus on South Alphington, Roemer Crescent and the clubs and school that hold the community together.</p>
    </div>

    <div class="card">
      <h3>How to read this</h3>
      <p>Local history is a patchwork of solid record and fond memory. Throughout, claims are tagged so you can tell them apart:</p>
      <p>
        <span class="tag sourced">documented</span> backed by a citable source &nbsp;
        <span class="tag legend">local legend</span> tradition, not documented &nbsp;
        <span class="tag uncertain">unverified</span> sources conflict or unconfirmed
      </p>
      <p>Every section ends with its sources. A full list — and the honest gaps still to be filled at Trove, PROV and the local history groups — sits in <strong>Sources &amp; gaps</strong>.</p>
    </div>

    <div class="card">
      <h3>The short version</h3>
      <ul>
        <li><strong>Country.</strong> Wurundjeri-willam land of the Kulin Nation, on the Birrarung and Darebin Creek.</li>
        <li><strong>1840.</strong> Crown land sold in four riverfront portions; the middle one (Portion 120) bought by German wool merchant <strong>Charles William Roemer</strong> — whose name survives in Roemer Crescent.</li>
        <li><strong>1850s.</strong> <strong>William Montague Manning</strong> lays out a village and names it <em>Alphington</em>, after his birthplace near Exeter, Devon.</li>
        <li><strong>1880s–1920s.</strong> Land boom, railway (1888) and estates fill the suburb with villas and bungalows.</li>
        <li><strong>1921–2012.</strong> The Australian Paper Mill dominates the riverside for ninety years; today it is the YarraBend redevelopment.</li>
      </ul>
    </div>
  `,
},

/* ───────────────────────── FIRST PEOPLES ───────────────────────── */
{
  id: 'first-peoples',
  label: 'First Peoples',
  render: () => `
    <h2 class="section-title">Wurundjeri Country</h2>
    <div class="section-dates">Deep time — to 1835</div>

    <div class="card">
      <h3>The Birrarung and Darebin Creek</h3>
      <p>Long before subdivision, this was — and remains — the Country of the <strong>Wurundjeri-willam</strong>, a clan of the Woiwurrung-speaking people of the <strong>Kulin Nation</strong>, whose lands ran from west of Melbourne east to the Darebin Creek and beyond. <span class="tag sourced">documented</span></p>
      <p>Alphington is unusually well-watered — held between two waterways, the <strong>Birrarung</strong> (the Yarra) to the south and the <strong>Darebin Creek</strong> to the east. That fertile river-flat country provided fresh water, fish, eels, tubers and the shoots of water plants, while the surrounding bush supplied food, fibre and tools.</p>
      <p>"Yarra" is an anglicised mishearing: the river's name is <strong>Birrarung</strong>. The word "yarra" is thought to come from "yarro yarro", describing water tumbling over rocky falls that once stood near today's Queensbridge Street in the city — a natural barrier that kept seawater downstream and served as a crossing place.</p>
    </div>

    <div class="callout">
      Acknowledgement — Alphington sits on the unceded land of the Wurundjeri Woi Wurrung people. Alphington Primary School and the local councils formally acknowledge them as Traditional Owners.
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://dcmc.org.au/learn/darebin-parklands-creek-history/" target="_blank" rel="noopener">Darebin Creek Management Committee — Parklands &amp; Creek History</a>; <a href="https://www.alphington.org.au/acconline/2021/7/5/Wurundjeri" target="_blank" rel="noopener">Alphington Community Centre — "Wurundjeri country"</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── FOUNDING & NAMING ───────────────────────── */
{
  id: 'founding',
  label: 'Founding & Naming',
  render: () => `
    <h2 class="section-title">Founding &amp; naming</h2>
    <div class="section-dates">1837 – 1888</div>

    <div class="card">
      <h3>Four portions on the river</h3>
      <p>In 1837 <strong>Robert Hoddle</strong> surveyed the country around Melbourne into parishes; Alphington falls within the <strong>Parish of Jika Jika</strong>. In the <strong>1840 land sales</strong> the future suburb was sold as four Crown Portions, each with a narrow frontage to the Yarra: <span class="tag sourced">documented</span></p>
      <ul>
        <li><strong>Portion 118</strong> — Dowling</li>
        <li><strong>Portion 119</strong> — G. Howitt (the Howitt brothers, who called the situation "delicious")</li>
        <li><strong>Portion 120</strong> — <strong>Charles William Roemer</strong> — the middle portion</li>
        <li><strong>Portion 121</strong> — <strong>Thomas Wills</strong>, who built "Lucerne" homestead (later the Lucerne Estate)</li>
      </ul>
      <p>Roemer never lived here. A German-born wool merchant, he on-sold Portion 120 almost at once to the Manning family. His name stuck to the crescent that traces the river-bend on his old allotment. (More in <strong>Roemer Crescent</strong>.)</p>
    </div>

    <div class="card">
      <h3>Why "Alphington"?</h3>
      <p><strong>William Montague Manning</strong> — later Solicitor-General of New South Wales — laid out a village on Roemer's old portion, "recognising the place's potential for a resting place between Melbourne and Heidelberg," and <strong>named it Alphington after his own birthplace: Alphington, near Exeter in Devon, England</strong>. <span class="tag sourced">documented</span></p>
      <p>He set the allotments around a central north–south road he called Tarra Street (now <strong>Yarralea Street</strong>), with the curving Roemer Crescent forming the "base" of the plan where it met the river. Selling of village lots along Heidelberg Road began from <strong>1854</strong>.</p>
    </div>

    <div class="card">
      <h3>Village, gardens and the railway</h3>
      <p>The settlement grew around the <strong>Darebin Creek bridge and Bridge Hotel</strong> on Heidelberg Road, begun in the 1840s (a permanent stone arch bridge followed in 1864). The <strong>Alphington Post Office opened on 2 February 1858</strong>. By 1865 the district was "mainly occupied by market gardens and vineyards," with a post office, butcher, baker, general store and two hotels.</p>
      <p>The turning point was the railway. <strong>Alphington station opened on 8 May 1888</strong> on the line from Clifton Hill to Heidelberg; a direct run into the city via Princes Bridge followed in 1901, and the line was electrified in 1921. Cheap, fast access to town turned a rural village into a commuter suburb, and the 1880s land boom filled it with estates.</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin-top:10px;">
        <tr style="color:var(--teal-bright);text-align:left;"><th style="padding:4px 6px;">Census</th><th>1881</th><th>1921</th><th>1933</th><th>2011</th><th>2021</th></tr>
        <tr style="color:var(--text-dim);"><td style="padding:4px 6px;">Population</td><td>1,114</td><td>2,797</td><td>4,780</td><td>4,603</td><td>5,702</td></tr>
      </table>
      <p style="font-size:0.8rem;color:var(--text-faint);margin-top:6px;">The plateau after 1933 reflects the paper mill's large industrial footprint; population is now climbing again as YarraBend fills in.</p>
    </div>

    <div class="card">
      <h3>A parish of its own — St Jude&rsquo;s, 1914</h3>
      <p>By the eve of the First World War the village had grown enough to warrant its own Anglican parish. The foundation stone of <strong>St Jude&rsquo;s Church, Alphington</strong> was laid in October 1913 by J.&nbsp;S.&nbsp;Adams&nbsp;JP, and the completed church — seating about 180 and costing around <strong>£1,500</strong> — was dedicated on <strong>28 March 1914</strong> by the Bishop of Bendigo, Dr Langley, with <strong>Rev. Hamilton Haslam</strong> installed as the new parish&rsquo;s first vicar. <span class="tag sourced">documented (primary source)</span></p>
      <p style="font-size:0.8rem;color:var(--text-faint);">A small but telling marker of a market-garden village maturing into a settled suburb — found in the digitised press during this project.</p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://www.victorianplaces.com.au/alphington" target="_blank" rel="noopener">Victorian Places — Alphington</a>; <a href="https://en.wikipedia.org/wiki/Alphington,_Victoria" target="_blank" rel="noopener">Wikipedia — Alphington, Victoria</a>; <a href="https://en.wikipedia.org/wiki/Alphington_railway_station" target="_blank" rel="noopener">Wikipedia — Alphington railway station</a>; <a href="https://heritage.darebinlibraries.vic.gov.au/article/16" target="_blank" rel="noopener">Darebin Heritage — Alphington</a>. St Jude&rsquo;s: <a href="https://trove.nla.gov.au/newspaper/article/89083410" target="_blank" rel="noopener">Heidelberg News, 28 March 1914, p.3 (Trove)</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── SOUTH ALPHINGTON ───────────────────────── */
{
  id: 'south',
  label: 'South Alphington',
  render: () => `
    <h2 class="section-title">South Alphington</h2>
    <div class="section-dates">The riverside half of the suburb</div>

    <div class="callout">
      <strong>A note on the name.</strong> "South Alphington" isn't a gazetted boundary. In practice it means the part of Alphington <strong>south of the Hurstbridge railway line</strong> — the Yarra-riverside area in the <strong>City of Yarra</strong> (Roemer, Lucerne and Como, the riverside parks and the old paper-mill land). North of the line sits in the <strong>City of Darebin</strong>. The railway is the real dividing line, and it's why Alphington is split across two councils. <span class="tag sourced">documented</span>
    </div>

    <div class="card">
      <h3>A contained riverside enclave</h3>
      <p>The City of Yarra's heritage study describes this southern area as "a residential enclave, physically contained by the early transport route of Heidelberg Road and the natural barrier of the Yarra River." That containment gives South Alphington its character: leafy, low-rise, deep garden setbacks, and a run of well-preserved <strong>Italianate, Federation and Californian Bungalow</strong> houses "differing to most other parts of the City by their garden setting." <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>How it was built out</h3>
      <p>The land is among the oldest laid out in Alphington — Roemer Crescent's lots trace to Manning's 1850s village plan — but <strong>building was slow</strong>. The great estates arrived with the 1880s boom:</p>
      <ul>
        <li><strong>Lucerne Estate</strong> (Lucerne Crescent, Como, Yarralea, St Gothards) — subdivided in stages from 1885 by Heidelberg developer E.D. Hodgson out of Thomas Wills' old "Lucerne Farm," its crescent shaped to maximise river views.</li>
        <li><strong>St James Park Estate</strong> (Alphington Street / Park Crescent) — a late-Victorian release marketed for "Gentlemen's Residences."</li>
      </ul>
      <p>Even so, a 1911 survey shows most riverside allotments still empty. The bulk of South Alphington's houses went up between about <strong>1915 and 1925</strong>.</p>
    </div>

    <div class="card">
      <h3>Artists on the river</h3>
      <p>Like Heidelberg and Ivanhoe upstream, the Alphington riverside drew painters. <strong>William McInnes</strong> built at 54 Lucerne Crescent in 1919 (designed by architect <strong>Harold Desbrowe-Annear</strong>), and <strong>William Frater</strong> lived next door at No. 56 — an echo, the heritage citation notes, of "the famed Heidelberg school who practised their art further east and north along the Yarra River." <span class="tag sourced">documented</span></p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://vhd.heritagecouncil.vic.gov.au/places/177236" target="_blank" rel="noopener">VHD — Alphington East Precinct (place 177236)</a>; City of Yarra Heritage Gap Study Stage 2 (Graeme Butler &amp; Associates, 2009); <a href="https://vhd.heritagecouncil.vic.gov.au/places/27376" target="_blank" rel="noopener">VHD — Alphington (North) Precinct</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── ROEMER CRESCENT ───────────────────────── */
{
  id: 'roemer',
  label: 'Roemer Crescent',
  render: () => `
    <h2 class="section-title">Roemer Crescent</h2>
    <div class="section-dates">Planning &amp; heritage deep-dive</div>

    <div class="card">
      <h3>Who was Roemer?</h3>
      <p>The street is named — documented, not guessed — for <strong>Charles William Roemer (1799–1874)</strong>, the original 1840 purchaser of Crown Portion 120, the middle of the three riverfront portions that became Alphington. <span class="tag sourced">documented</span></p>
      <p>Roemer was born in <strong>Leipzig, Saxony</strong> in 1799, the son of an officer in the Royal Saxon Regiment. He worked in London's Cheapside as a German wool importer, emigrated to New South Wales in 1832, became a wool exporter and helped found a Sydney bank, and amassed large landholdings across NSW and the Port Phillip District — including Portion 120. He died in Stuttgart in 1874. <span class="tag sourced">documented</span></p>
      <p>He never developed the land himself: he on-sold it in 1841 to James Manning, whose brother <strong>William Montague Manning</strong> laid out the village. The surname is German (Saxon) in origin — a common German/Dutch surname — though no source ties the name's etymology specifically to him. <span class="tag uncertain">surname etymology unverified</span></p>
    </div>

    ${MAP_CROWN_PORTIONS()}

    <div class="card">
      <h3>The plan: a crescent on the river</h3>
      <p>Roemer Crescent is the <strong>curving "base" of Manning's village subdivision</strong>, sweeping down to the Yarra. The City of Yarra's heritage citation calls the precinct "aesthetically significant for the distinctive street layout arising from Manning's early Alphington village subdivision, with its curving base in the form of Roemer Crescent at the Yarra River," noting "the semi-circle of Roemer Crescent, fanning out to Yarra River views" — a shape that "attracted the earliest villa development." <span class="tag sourced">documented</span></p>
      <p>Those first villas were built by a well-to-do class the citation describes as "predominantly ironmongers, such as <strong>William Delbridge</strong> and <strong>John Enticott</strong>." Enticott's home, <strong>"Rosemount" at 3 Roemer Crescent</strong>, still stands as a spacious Victorian residence. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>The 1911 map — laid out, but nearly empty</h3>
      <p>The key early document is the <strong>Melbourne &amp; Metropolitan Board of Works (MMBW) Detail Plan No. 1319, Shire of Heidelberg, 1911</strong>, drawn at 40 feet to the inch and held by the State Library of Victoria. It shows the crescent's allotments <strong>fully laid out but almost unbuilt</strong> — just a cluster of early houses on the south side and one at the end of View Street. The suburb's real building boom was still a decade off. <span class="tag sourced">documented</span></p>
      <p>The map behind this street is one you can go and see: the MMBW plan (State Library of Victoria) and, further back, the <strong>Parish of Jika Jika</strong> parish plan showing Portion 120 itself (Public Record Office Victoria). Links are in the sources below.</p>
    </div>

    ${MAP_ROEMER_STREET()}

    <div class="card">
      <h3>Heritage overlay HO362</h3>
      <p>Roemer Crescent is a component street of the <strong>Alphington East Residential Heritage Precinct — Heritage Overlay HO362</strong> in the City of Yarra Planning Scheme (confirmed against the Victorian planning-schemes portal and the VHD citation). The precinct's other streets include Lucerne Crescent, Como, Yarralea, View, Riverview Grove, St Gothards and St Bernards. <span class="tag sourced">documented</span></p>
      <p>The heritage character the overlay protects: one-storey Federation and Californian Bungalow houses, pitched gabled or hipped roofs, weatherboard or brick/stucco walls, Marseilles-pattern terracotta tiles, timber-post verandahs, and — above all — <strong>deep front gardens</strong> behind low picket or wire fences.</p>
    </div>

    <div class="card">
      <h3>House by house</h3>
      <p>From the City of Yarra Heritage Gap Study (Graeme Butler &amp; Associates, 2009), with each property's council database number:</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
        <tr style="color:var(--teal-bright);text-align:left;border-bottom:1px solid var(--border);">
          <th style="padding:5px 6px;">No.</th><th>Era</th><th>Grading</th></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">3 &mdash; "Rosemount"</td><td>Victorian</td><td>Contributory · John Enticott's house</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">5</td><td>1880&ndash;90</td><td>Contributory · oldest on the street</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">2</td><td>1915&ndash;25</td><td>Contributory</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">4</td><td>1915&ndash;25</td><td>Contributory</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">6</td><td>1915&ndash;25</td><td>Contributory</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">7</td><td>1990&ndash;2000</td><td>Award-winning modern design, faces river</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">8</td><td>1915&ndash;25</td><td>Contributory</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">10</td><td>1915&ndash;25</td><td>Contributory</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">12</td><td>1915&ndash;25</td><td>Contributory</td></tr>
        <tr style="border-bottom:1px solid var(--border);"><td style="padding:5px 6px;">14 &mdash; "Riverview"</td><td>1915&ndash;25</td><td>Not contributory · Californian Bungalow</td></tr>
        <tr><td style="padding:5px 6px;">16</td><td>interwar</td><td>Precinct property</td></tr>
      </table>
      <p style="font-size:0.8rem;color:var(--text-faint);margin-top:8px;">"Contributory" means a house adds to the precinct's heritage significance. "Not contributory" (e.g. No. 14) means the 2009 survey judged it altered enough to no longer count toward that significance — not that it lacks history; it still dates from the street's main 1915&ndash;25 era. House names like "Rosemount" and "Riverview" come from public sale records, not the council register. <span class="tag uncertain">house names from sale listings</span></p>
    </div>

    <div class="callout">
      <strong>Gap worth closing.</strong> No digitised Trove newspaper article naming "Roemer Crescent" in the 1880s&ndash;1920s could be found via automated search. A direct search on <a href="https://trove.nla.gov.au/newspaper" target="_blank" rel="noopener">Trove</a> (which needs a real browser) for "Roemer Crescent", "Alphington" and "Manning's Estate" would likely surface original subdivision and sale notices.
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://vhd.heritagecouncil.vic.gov.au/places/177236" target="_blank" rel="noopener">VHD — Alphington East Precinct (place 177236)</a>; <a href="https://planning-schemes.app.planning.vic.gov.au/Yarra" target="_blank" rel="noopener">City of Yarra Planning Scheme — HO362</a>; <a href="https://adb.anu.edu.au/biography/roemer-charles-william-2601" target="_blank" rel="noopener">Australian Dictionary of Biography — Charles William Roemer</a>; City of Yarra Heritage Gap Study Stage 2 (Butler, 2009).</li>
      <li>Maps: <a href="https://www.slv.vic.gov.au/search-discover/explore-collections-format/maps/maps-melbourne-city-suburbs/mmbw-plans" target="_blank" rel="noopener">MMBW Detail Plan No. 1319 (1911) — State Library Victoria</a>; <a href="https://prov.vic.gov.au/explore-collection/explore-topic/researching-land-and-property/parish-and-township-plans" target="_blank" rel="noopener">Parish of Jika Jika plan — Public Record Office Victoria</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── RUNNYMEADE ───────────────────────── */
{
  id: 'runnymeade',
  label: 'Runnymeade & the Renns',
  render: () => `
    <h2 class="section-title">Runnymeade &amp; the Renn family</h2>
    <div class="section-dates">1920s – early 1960s · Elmo Avenue</div>

    <div class="card">
      <h3>A glorious home and its garden</h3>
      <p>On <strong>Elmo Avenue</strong>, on the rise above the Yarra beside what is now Alphington Park, stood <strong>"Runnymeade"</strong> — the home of the <strong>Renn family</strong>. From the <strong>1920s to the early 1960s</strong> the riverbank below it formed part of their "beautifully landscaped gardens," and their "glorious home" stood on the adjacent site. <span class="tag sourced">documented (heritage signage)</span></p>
      <p>The gardens were no ordinary suburban plot. <strong>Mrs P. S. Renn&rsquo;s garden won first prize in <em>The Herald</em>&rsquo;s 1940 garden competition</strong> — now confirmed from the original press. She kept placing in later years (3rd in Section 1 in 1941; runner-up in Section 1, 75 points, in 1947), making Runnymeade one of Melbourne&rsquo;s celebrated private gardens of the era. <span class="tag sourced">documented (primary source)</span></p>
      <p style="font-size:0.82rem;color:var(--text-faint);">The Yarra Trail sign records this as the &ldquo;1940 Herald Sun and Weekly Times Garden Competition.&rdquo; The contemporary 1940 report calls it <em>The Herald</em>&rsquo;s competition — the &ldquo;Herald Sun&rdquo; masthead only dates from 1990, so the original honour was <em>The Herald</em>&rsquo;s.</p>
    </div>

    <div class="card">
      <h3>What survives</h3>
      <p>The house is gone, but the land remembers it. The Yarra Trail signage notes that <strong>"the stone walls of the terrace gardens and steps to the riverbank remain as a reminder of the past use of the area, as do the oak trees a little further downstream."</strong> Those terraced stone walls and steps — and the mature oaks — are the physical fabric of the Renn garden, still there within Alphington Park's riverbank today. <span class="tag sourced">documented</span></p>
      <div class="quote">
        "From the 1920s to the early 1960s, this section of riverbank was part of the beautifully landscaped gardens of the Renn family property. Their glorious home 'Runnymeade' stood on the adjacent site."
        <cite>— Alphington riverside landscapes, Yarra Trail heritage sign</cite>
      </div>
    </div>

    <div class="card">
      <h3>The Renns, out of the newspapers</h3>
      <p>Digitised newspapers put flesh on the family. <strong>Mr P. Renn was a printer</strong> — reported in 1914 when his Alphington home was burgled — and by the 1930s the Renns were at <strong>Runnymeade, St Elmo Road (later Elmo Avenue), Alphington</strong>, a socially prominent household. <span class="tag sourced">documented (primary source)</span></p>
      <p>After her 1940 first prize, <strong>Mrs P. S. Renn opened the garden again and again for charity</strong>. One afternoon in May 1940 the Ivanhoe League of Mission Helpers ran a bridge party there for about 80 guests, the reception rooms &ldquo;beautifully decorated with pink zinnias and green hydrangeas, marigolds and dahlias&rdquo;; across such events she helped raise more than £80 for the Blind Auxiliary, the Austin Hospital Auxiliary and the Australian Comforts Fund.</p>
      <p>The next generation of Renns turn up in the suburb&rsquo;s sport through the 1920s–30s — playing cricket for Alphington and football for the Alphington club, with one young Renn reported in 1934 as &ldquo;training with Collingwood.&rdquo; A printing family, deep in the life of the place. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>What we still don't know</h3>
      <p>A photograph captioned <strong>"Runnymeade House, Elmo Ave, Alphington, 1937"</strong> survives in the John Young Collection, reproduced in the booklet <em>Heidelberg, 1937</em> — proof the house stood by then. <span class="tag sourced">documented</span> But much remains undocumented:</p>
      <ul>
        <li><strong>The Renns&rsquo; full given names</strong> — the press gives only initials (Mr P. Renn, printer; Mrs P. S. Renn, the gardener). A BDM or electoral-roll search would supply the rest.</li>
        <li><strong>When Runnymeade was built, and by whom</strong>: still undocumented. The house stood by 1937 (the photograph) and the family were there into at least the late 1940s.</li>
        <li><strong>When it was demolished</strong>: no record found; the past-tense heritage wording and the "early 1960s" end-date imply the house was gone by the 1960s, its land absorbed into the park and Elmo Avenue housing. Rate books would pin the year. <span class="tag uncertain">demolition inferred, not documented</span></li>
      </ul>
      <p style="font-size:0.8rem;color:var(--text-faint);">Note: Elmo Avenue appears to take its name from a separate "St Elmo" house near Lucerne Crescent — not to be confused with Runnymeade.</p>
    </div>

    <div class="callout">
      <strong>The best leads to close these gaps</strong> are a browser-based <a href="https://trove.nla.gov.au/newspaper" target="_blank" rel="noopener">Trove</a> search for "Runnymeade" + "Renn" + Alphington and the 1940 <em>Weekly Times</em> garden-competition report; the Sands &amp; McDougall directories and PROV rate books (for the Renns' occupation and the demolition date); and the Heidelberg Historical Society and 3078 History Group.
    </div>

    <ul class="source-list">
      <li>Sources: Yarra Trail interpretive signage, "Alphington riverside landscapes" (Parks Victoria / City of Yarra); <a href="https://www.victorianplaces.com.au/node/64577" target="_blank" rel="noopener">Victorian Places — "Runnymeade House, Elmo Ave, Alphington, 1937" (John Young Collection)</a>; Alphington Park Heritage Assessment 2007; <a href="https://afcivic.org/a-rich-history/" target="_blank" rel="noopener">Alphington Fairfield Civic Association — "A rich history"</a>.</li>
      <li>Primary press (Trove): <a href="https://trove.nla.gov.au/newspaper/article/244130313" target="_blank" rel="noopener">"Prize Garden Opened For Charity", The Herald, 1 May 1940, p.16</a>; <a href="https://trove.nla.gov.au/newspaper/article/11029781" target="_blank" rel="noopener">"Bridge Parties", The Argus, 24 Apr 1936, p.4</a>; <a href="https://trove.nla.gov.au/newspaper/article/245578592" target="_blank" rel="noopener">"Herald First-Prize Gardens", The Herald, 22 Mar 1947, p.5</a>; robbery reports naming "Mr P. Renn, printer" (The Age &amp; The Herald, 2–3 Apr 1914).</li>
    </ul>
  `,
},

/* ───────────────────────── GRAND HOMES & ESTATES ───────────────────────── */
{
  id: 'estates',
  label: 'Homes & Estates',
  render: () => `
    <h2 class="section-title">Grand homes &amp; estates</h2>
    <div class="section-dates">Orchards, mansions and villas</div>

    <div class="card">
      <h3>Fulham Grange — the orchard that became a suburb</h3>
      <p>In the early 1850s <strong>Richard and Elizabeth Perry</strong> bought uncleared land and, with their sons, built one of Melbourne's great horticultural businesses. By the late 1860s the <strong>Perry Brothers' orchard</strong> held some <strong>100,000 fruit trees</strong> — apple, pear, plum, peach, apricot, quince, lemon, orange — plus a cannery turning out jams and bottled fruit, and a nursery stocking "almost every variety of exotic tree available in the colonies." <span class="tag sourced">documented</span></p>
      <p>Subdivided in the 1880s as the <strong>Fulham Grange Estate</strong> — called by one source "one of Melbourne's first garden suburbs" — it gave the district Perry Street, Grange Road and Fulham Road. The 1886 house <strong>"Edgebaston"</strong> at 1 Tower Avenue survives from that era.</p>
    </div>

    <div class="card">
      <h3>Lucerne Estate villas</h3>
      <p>Thomas Wills' 1840s "Lucerne Farm" became the Lucerne Estate (subdivided from 1885), whose crescent was shaped for river views. Its standout houses are the artists' homes at <strong>54 Lucerne Crescent</strong> (built 1919 for painter <strong>William McInnes</strong>, designed by <strong>Harold Desbrowe-Annear</strong>; individually heritage-listed as HO74) and <strong>56 Lucerne Crescent</strong> (painter <strong>William Frater</strong>). <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>Park Crescent mansions</h3>
      <p>The Park Crescent heritage area (HO328, straddling Alphington and Fairfield) holds a run of Victorian and Edwardian houses: <strong>Andembach</strong> (an 1894 American Queen Anne mansion for William Brewer), <strong>"The Nook"</strong> (1892–3), and a house designed by architect <strong>Horace John MacKennal</strong> at 46 Park Crescent (1903). The 1887 "Bella Vista" is now demolished. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>Woodlands — the estate the mill swallowed</h3>
      <p>Before the paper mill, its site was <strong>"Woodlands"</strong> — from 1883 "a large and affluent Yarra Bank property" with a ten-room home, coach house, stables, servants' quarters and a harness room. Australian Paper Manufacturers bought it in 1918 and it vanished beneath the mill; the land is now YarraBend. <span class="tag uncertain">described in developer/heritage sources</span></p>
      <p style="font-size:0.8rem;color:var(--text-faint);">A note on "Pleasant View": no documented estate of that name in Alphington could be found — flagged in case it belongs to another suburb or survives only in private records.</p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://www.alphington.org.au/acconline/2020/6/25/m1qdljwrrhmszmhrrqfe1rn93m06nf" target="_blank" rel="noopener">Alphington Community Centre — "3078 History: Fulham Grange"</a>; <a href="https://www.victorianplaces.com.au/alphington" target="_blank" rel="noopener">Victorian Places — Alphington</a>; City of Yarra Review of Heritage Overlay Areas 2007 (Butler); <a href="https://en.wikipedia.org/wiki/Alphington_Paper_Mill" target="_blank" rel="noopener">Wikipedia — Alphington Paper Mill</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── PAPER MILL ───────────────────────── */
{
  id: 'papermill',
  label: 'The Paper Mill',
  render: () => `
    <h2 class="section-title">The paper mill → YarraBend</h2>
    <div class="section-dates">1918 – present</div>

    <div class="card">
      <h3>Ninety years of paper</h3>
      <p>In <strong>August 1918</strong>, <strong>Australian Paper Manufacturers (APM)</strong> bought the riverside "Woodlands" estate — 23 acres valued for its river frontage (water and effluent) and its rail access. Built from <strong>1.2 million bricks</strong> over two years, the mill was <strong>officially opened on 31 August 1921</strong> by the Chief Justice of Victoria, Sir William Irvine. <span class="tag sourced">documented</span></p>
      <p>For most of the twentieth century it made <strong>board for containers and packaging</strong>, anchoring Alphington and Fairfield's industrial character and employing generations of locals. A dedicated rail siding (from 1919) hauled coal in and paper out across Heidelberg Road until 1994. The 1954 Boiler House was one of Melbourne's earliest examples of curtain-wall construction. In 1986 the business became part of <strong>Amcor</strong>.</p>
    </div>

    <div class="card">
      <h3>The river's cost</h3>
      <p>The mill's Yarra frontage cut both ways. It drew pollution complaints as early as 1949, and Amcor was later convicted for <strong>odour (2001)</strong>, <strong>discharging paper pulp into the Yarra (2007)</strong> and <strong>releasing oil into the river (2008 — an $80,000 fine)</strong>. Those convictions later fed the argument that the site should be cleared rather than preserved. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>Closure, and the Boiler House fight</h3>
      <p>Manufacturing <strong>ceased in December 2012</strong>, production shifting to a new $500m plant in Sydney. The 16-hectare site sold in <strong>2013 for about $120 million</strong> to a Glenvill-led consortium.</p>
      <p>The central heritage battle was over the <strong>1954 Boiler House</strong>. The Heritage Council found it of state significance and recommended it for the Victorian Heritage Register — but on <strong>25 October 2017 Planning Minister Richard Wynne overruled the recommendation</strong>, calling the old power station "an eyesore, a relic of the past" that "needs to go" (citing asbestos and safety). A compromise retained the 1920s conical chimney, the APM motif and red-brick façade, reconstructed into the YarraBend "Boiler House" amenity building, alongside a $5.1m heritage package with an interpretive "paper trail." <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>YarraBend</h3>
      <p>The redevelopment — correctly named <strong>YarraBend</strong> (not "Yarra's Edge," which is in Docklands) — is planned for up to <strong>2,500 dwellings and about 5,000 residents</strong> across seven precincts, effectively doubling Alphington's population. Marketed heavily on sustainability (solar, home batteries, EV charging), it earned the press nickname "Tesla town." Building names like <em>Papersmith</em>, <em>Fourdrinier House</em> and <em>Boiler House</em> nod to the site's papermaking past. <span class="tag sourced">documented</span></p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://en.wikipedia.org/wiki/Alphington_Paper_Mill" target="_blank" rel="noopener">Wikipedia — Alphington Paper Mill</a>; <a href="https://www.emelbourne.net.au/biogs/EM00129b.htm" target="_blank" rel="noopener">eMelbourne — Australian Paper Manufacturers Ltd</a>; <a href="https://www.theurbandeveloper.com/articles/yarrabend-breakdown-alphington-paper-mill-development" target="_blank" rel="noopener">The Urban Developer — YarraBend Breakdown</a>; <a href="https://architectureau.com/articles/architecturally-significant-power-station-to-be-demolished-replaced-with-housing-development/" target="_blank" rel="noopener">ArchitectureAU — Boiler House decision</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── GRANDVIEW HOTEL ───────────────────────── */
{
  id: 'grandview',
  label: 'Grandview Hotel',
  render: () => `
    <h2 class="section-title">The Grandview Hotel</h2>
    <div class="section-dates">1888 · 429 Heidelberg Road</div>

    <div class="card">
      <h3>A landmark on Heidelberg Road</h3>
      <p>The <strong>Grandview Hotel</strong> stands at 429 Heidelberg Road, on the corner of Station Street — technically just inside Fairfield, but a shared landmark for both suburbs. Its liquor licence was granted on <strong>15 August 1888</strong> and the building was completed that year. It has traded on the same corner for over 130 years. <span class="tag sourced">documented</span></p>
      <p>The Victorian Heritage Database describes it as "a large and prominently sited example of a late Victorian Italianate hotel" — three storeys, rendered, with a square central tower (its roof since removed). Its heritage significance is tied to "the extension of the railway line to Heidelberg and the continuing voluminous road traffic" on Heidelberg Road.</p>
    </div>

    <div class="card">
      <h3>Was it a staging point for day trips from Melbourne?</h3>
      <p>This is the local story — that the Grandview was a coaching stop where horses were changed on the day's journey out of Melbourne. After extensive searching, <strong>no primary or secondary source could be found to document it.</strong> <span class="tag legend">local legend — undocumented</span></p>
      <p>Two things make the coaching-stage role structurally unlikely for <em>this</em> building:</p>
      <ul>
        <li>The hotel dates only to <strong>1888</strong> — the very year the <strong>railway reached Heidelberg</strong>, by which time long-distance coaching in Victoria was already in decline as rail took over.</li>
        <li>The only sourced transport link is the general one above (its siting relative to Heidelberg Road traffic and the new railway) — about <em>why it was built there</em>, not about coaches changing horses.</li>
      </ul>
      <p>None of this disproves the tradition — horse-and-cart traffic certainly used Heidelberg Road, and an <em>earlier</em> inn on the route may lie behind the story. But as it stands the "staging post" claim should be treated as <strong>affectionate local legend, not documented history</strong>, pending a Trove newspaper find or the full VHD statement of significance.</p>
    </div>

    <div class="callout">
      Worth noting: the district's genuinely documented early coaching-era property is <strong>"Woodlands"</strong> (see Homes &amp; Estates), which really did have a coach house, stables and harness room — later swallowed by the paper mill. It's possible the coaching tradition has, over time, attached itself to the more visible Grandview.
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://en.wikipedia.org/wiki/Fairfield,_Victoria" target="_blank" rel="noopener">Wikipedia — Fairfield, Victoria</a>; <a href="https://vhd.heritagecouncil.vic.gov.au/places/24125" target="_blank" rel="noopener">VHD — Grand View Hotel (place 24125)</a> (access via a browser). No source located for the coaching-stage claim.</li>
    </ul>
  `,
},

/* ───────────────────────── PARKSIDE FC ───────────────────────── */
{
  id: 'parkside',
  label: 'Parkside FC',
  render: () => `
    <h2 class="section-title">Parkside Football Club</h2>
    <div class="section-dates">Founded 19 January 1934 · Pitcher Park</div>

    <div class="card">
      <h3>Born in a hotel, in 1934</h3>
      <p>The idea was floated by <strong>Lionel Pepper</strong> to a group of mates at the <strong>Alphington Hotel</strong>; <strong>Les Hanger</strong> called the founding meeting on <strong>19 January 1934</strong>. Les Triggert was first president, Charlie Laxton first coach, Reg Watson first captain. The club took the name <strong>"Parkside"</strong> because its ground, <strong>Pitcher Park</strong>, sits centrally within the Alphington Parklands. <span class="tag sourced">documented</span></p>
      <p style="font-size:0.82rem;color:var(--text-faint);">A note on the ground: the club has always played at <strong>Pitcher Park</strong>, not Wilson Reserve — a common local mix-up.</p>
    </div>

    <div class="card">
      <h3>The Devils</h3>
      <p>Nicknamed <strong>"The Devils"</strong> (introduced in 1959 by Brian Lauder) and playing in red and white, Parkside has spent most of its life in the <strong>Victorian Amateur Football Association (VAFA)</strong>, which it joined in 1938. A spell in the Diamond Valley / Northern Football League ran from 2003 to 2014 before the club returned to the VAFA in 2015. In 2026 both its men's and women's sides play in <strong>VAFA Division 1</strong>. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>Premierships &amp; community</h3>
      <p>Senior-grade flags in <strong>1954, 1963, 1972, 1982, 1988</strong> and <strong>2023</strong> — twelve premierships in all across VAFA grades. The 1954 win was an undefeated "Champion team" season. <span class="tag sourced">documented</span></p>
      <p>Parkside is the football arm of the broader <strong>Parkside Sports Club</strong> (which also runs junior football, cricket, golf and netball around Pitcher Park), and fields a side in the <strong>FIDA league</strong> for athletes with intellectual disabilities — a genuine, broad-based community club.</p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://en.wikipedia.org/wiki/Parkside_Football_Club" target="_blank" rel="noopener">Wikipedia — Parkside Football Club</a>; <a href="https://www.vafa.com.au/clubs/parkside/" target="_blank" rel="noopener">VAFA — Parkside club page</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── CLUBS & SPORT ───────────────────────── */
{
  id: 'clubs',
  label: 'Clubs & Sport',
  render: () => `
    <h2 class="section-title">Clubs &amp; sport</h2>
    <div class="section-dates">The community at play</div>

    <div class="card">
      <h3>Alphington Bowls Club — 1921</h3>
      <p>Founded in <strong>1921</strong> (specifically 11 September, the same year the paper mill opened), the club sits in the north-west corner of Alphington Park beside the Yarra, with two grass greens. The Ladies Club formed in 1928; a fire destroyed the original clubhouse in 1951. Bowlers <strong>Les and Myrtle</strong> together won 36 club championships. After nearly closing around a decade ago, it reinvented itself as a community club, marked its <strong>centenary in 2021</strong>, and now welcomes some 5,000 visitors a year with all-abilities bowls and schools programs. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>North Alphington Cricket Club</h3>
      <p>The NACC says it has "been competing at all levels of cricket for over 100 years," and the record shows it as <strong>premiers of the Heidelberg District Cricket Association in 1933–34</strong> — so it dates at least to the early 1930s (exact founding year not yet documented <span class="tag uncertain">founding year unconfirmed</span>). It plays at <strong>Pitcher Park</strong> (corner Mercil Road and Parklands Avenue) as part of the Parkside Sporting Club, fielding men's, women's, veterans' and junior sides in the Eastern Cricket Association and Eastern Girls &amp; Women's Cricket. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>Alphington FC — the "Bluetongues" — 2003</h3>
      <p>Started in <strong>2003</strong> by a group of Alphington parents whose kids played soccer at Alphington Park, the <strong>Bluetongues</strong> call themselves "the only all-ages football club in Alphington," fielding teams from five-year-olds to veterans and all-abilities, plus men's and women's sides in Football Victoria competition. Their home is the Alphington Park oval. The nickname's origin isn't documented. <span class="tag sourced">documented</span> <span class="tag uncertain">nickname origin unknown</span></p>
    </div>

    <div class="card">
      <h3>Alphington Netball Club</h3>
      <p>A volunteer-run community club (founding year not documented <span class="tag uncertain">founding year unknown</span>) offering NetSetGO through to Open teams. The youngest players train at <strong>Alphington Primary School</strong> on Yarralea Street; older teams play at Fairlea Reserve in Yarra Bend Park, competing in the Banyule and Darebin junior competitions with around 19 teams. <span class="tag sourced">documented</span></p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://bowls.com.au/alphington-more-than-just-a-bowls-club/" target="_blank" rel="noopener">Bowls Australia — Alphington Bowls Club</a>; <a href="https://www.alphington.org.au/alphington-bowls-club-centenary" target="_blank" rel="noopener">Alphington Community Centre — Bowls Club Centenary</a>; <a href="https://www.nacc.org.au/about-us" target="_blank" rel="noopener">North Alphington CC — About</a>; <a href="https://www.alphingtonfc.com/about" target="_blank" rel="noopener">Alphington FC — About</a>; <a href="https://alphingtonnetball.club/" target="_blank" rel="noopener">Alphington Netball Club</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── SCHOOLS ───────────────────────── */
{
  id: 'schools',
  label: 'Schools',
  render: () => `
    <h2 class="section-title">Alphington Primary School</h2>
    <div class="section-dates">State School No. 3599 · Yarralea Street</div>

    <div class="card">
      <h3>"Central to the residential estate"</h3>
      <p><strong>Alphington Primary School — State School No. 3599</strong> — stands on Yarralea Street, the very road William Manning laid out as the spine of his 1850s village. The City of Yarra's heritage citation calls the school "central to the residential estate," and it remains exactly that: a community hub that also hosts Alphington Netball Club's junior training and partners with the Bowls Club. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>How old is it, really? Three dates</h3>
      <p>The school's beginnings are recorded three different ways — worth untangling: <span class="tag uncertain">sources conflict</span></p>
      <ul>
        <li><strong>1885</strong> — Victorian Places lists "Alphington primary school (1885)," most likely an earlier village or church school on or near the site.</li>
        <li><strong>21 August 1908</strong> — the official opening date of <strong>State School No. 3599</strong> in the Victorian state-school register.</li>
        <li><strong>1924</strong> — the heritage citation says the state school "opened there in 1924," almost certainly meaning the present Yarralea Street <strong>schoolhouse</strong> was built (or the school moved to its current site) during the interwar housing boom.</li>
      </ul>
      <p><strong>The most likely reconciliation:</strong> schooling on the site from as early as 1885; the state school (No. 3599) formally dating to 1908; and the current school building dating to about 1924. Each strand is worth confirming against the Darebin Heritage school article and PROV school records.</p>
    </div>

    <div class="card">
      <h3>In the photographs</h3>
      <p>Darebin's heritage collection holds class photographs including a <strong>Grade 5 class of 1924</strong> and a <strong>Grade 1 class of 1939</strong> — a reminder that generations of Alphington children have passed through these gates. The school today acknowledges the Wurundjeri Woi Wurrung as Traditional Owners of its land. <span class="tag sourced">documented</span></p>
      <p style="font-size:0.82rem;color:var(--text-faint);">Still to be filled in: the roll of principals, enrolment history, and notable former pupils — most likely held in the Darebin Heritage article and PROV's school files (VPRS records for No. 3599).</p>
    </div>

    <div class="card">
      <h3>Not to be confused: Alphington Grammar</h3>
      <p>Separately, <strong>Alphington Grammar School</strong> is a private school opened in <strong>1989</strong>, established by the <strong>Greek Community of Melbourne and Victoria</strong> (though open to all). It occupies a former homestead site — the Edwardian residence <strong>"Flowerdale"</strong> survives on campus overlooking Darebin Creek — which earlier hosted Parade College's junior school (1956–81). It is a different institution from the government primary school. <span class="tag sourced">documented</span></p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://www.vic.gov.au/alphington-primary-school-number-3599" target="_blank" rel="noopener">Victorian state-school register — Alphington PS No. 3599</a>; <a href="https://www.alphinps.vic.edu.au/" target="_blank" rel="noopener">Alphington Primary School</a>; <a href="https://www.victorianplaces.com.au/alphington" target="_blank" rel="noopener">Victorian Places — Alphington</a>; <a href="https://alphington.vic.edu.au/about/our-history/" target="_blank" rel="noopener">Alphington Grammar — Our History</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── NEIGHBOURS ───────────────────────── */
{
  id: 'neighbours',
  label: 'Neighbours',
  render: () => `
    <h2 class="section-title">The neighbours</h2>
    <div class="section-dates">Fairfield · Heidelberg · Clifton Hill</div>

    <div class="card">
      <h3>Fairfield</h3>
      <p>Alphington's immediate western neighbour, sharing the Grange Road boundary and the Yarra frontage. Named after "Fairfield Park," an estate subdivided by speculator <strong>Charles Henry James</strong>; its post office opened in 1887 and it was served by the same 1888 railway. Fairfield and Alphington moved together from the City of Heidelberg to Northcote in 1962, then into Darebin in 1994. The Grandview Hotel technically sits in Fairfield. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>Heidelberg — and the painters</h3>
      <p>First called <strong>"Warringal,"</strong> Heidelberg was renamed in 1865, and for decades its municipality (the City of Heidelberg) administered Alphington and Fairfield. Its great cultural claim is the <strong>Heidelberg School</strong>: from 1888, cheap, empty land and the new railway drew <strong>Tom Roberts, Arthur Streeton and Frederick McCubbin</strong> to a plein-air painting camp at Eaglemont — the birthplace of Australian Impressionism, worked along the same Yarra corridor that runs down through Alphington. <span class="tag sourced">documented</span></p>
    </div>

    <div class="card">
      <h3>Clifton Hill</h3>
      <p>Proclaimed in 1855 and dubbed "the Toorak of Collingwood" by 1886, Clifton Hill was subdivided on a deliberate grid by Crown Lands surveyor <strong>Clement Hodgkinson</strong> in the 1860s. It matters to Alphington because it's the <strong>junction point of the railway</strong>: the 1888 line to Alphington, Fairfield and Heidelberg branches from Clifton Hill, physically tying Alphington's transport lifeline to the inner city. <span class="tag sourced">documented</span></p>
    </div>

    <ul class="source-list">
      <li>Sources: <a href="https://en.wikipedia.org/wiki/Fairfield,_Victoria" target="_blank" rel="noopener">Wikipedia — Fairfield</a>; <a href="https://www.victorianplaces.com.au/heidelberg" target="_blank" rel="noopener">Victorian Places — Heidelberg</a>; <a href="https://en.wikipedia.org/wiki/Heidelberg_School" target="_blank" rel="noopener">Wikipedia — Heidelberg School</a>; <a href="https://en.wikipedia.org/wiki/Clifton_Hill,_Victoria" target="_blank" rel="noopener">Wikipedia — Clifton Hill</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── FAMOUS PEOPLE ───────────────────────── */
{
  id: 'people',
  label: 'Famous People',
  render: () => `
    <h2 class="section-title">Notable people</h2>
    <div class="section-dates">Associated with Alphington</div>

    <div class="card">
      <h3>Artists &amp; writers</h3>
      <ul>
        <li><strong>William McInnes</strong> &amp; <strong>William Frater</strong> — painters, who built and lived on Lucerne Crescent (see Homes &amp; Estates).</li>
        <li><strong>Rick Amor</strong> — artist.</li>
        <li><strong>Angie McMahon</strong> — singer-songwriter.</li>
      </ul>
    </div>

    <div class="card">
      <h3>Public life</h3>
      <ul>
        <li><strong>Julian Burnside AO KC</strong> — barrister, human-rights and refugee advocate, author.</li>
        <li><strong>Lindsay Tanner</strong> — former federal MP and Finance Minister.</li>
        <li><strong>Richard Minifie</strong> — WWI fighter ace.</li>
      </ul>
    </div>

    <div class="card">
      <h3>Sport</h3>
      <ul>
        <li><strong>Sam Groth</strong> — tennis player, once holder of the fastest recorded serve.</li>
        <li><strong>Paul Licuria</strong>, <strong>Anthony Rocca</strong>, <strong>Darcy Moore</strong> — AFL footballers.</li>
      </ul>
      <p style="font-size:0.8rem;color:var(--text-faint);">Checked and ruled out: author <em>Alan Marshall</em> (I Can Jump Puddles) lived in Eltham, not Alphington.</p>
    </div>

    <ul class="source-list">
      <li>Source: <a href="https://en.wikipedia.org/wiki/Alphington,_Victoria" target="_blank" rel="noopener">Wikipedia — Alphington, Victoria</a>.</li>
    </ul>
  `,
},

/* ───────────────────────── TIMELINE ───────────────────────── */
{
  id: 'timeline',
  label: 'Timeline',
  render: () => `
    <h2 class="section-title">Timeline</h2>
    <div class="section-dates">From survey to YarraBend</div>
    <div class="card">
      <div class="timeline">
        ${[
          ['1837', 'Robert Hoddle surveys the Parish of Jika Jika.'],
          ['1840', 'Crown land sold in four riverfront portions; Charles William Roemer buys Portion 120.'],
          ['1850s', 'W.M. Manning lays out a village and names it Alphington, after his Devon birthplace.'],
          ['1858', 'Alphington Post Office opens (2 February).'],
          ['1865', 'District "mainly market gardens and vineyards."'],
          ['1880s', 'Land boom: Fulham Grange, St James Park and Lucerne estates subdivided.'],
          ['1888', 'Alphington railway station opens (8 May). Grandview Hotel built.'],
          ['1908', 'Alphington State School No. 3599 opens (21 August).'],
          ['1913–14', 'St Jude&rsquo;s Church dedicated (28 March 1914) — Alphington gains its own Anglican parish.'],
          ['1911', 'MMBW Detail Plan 1319 shows Roemer Crescent laid out but nearly unbuilt.'],
          ['1912', 'Alphington Park begins to be developed.'],
          ['1915–25', 'Main building era on Roemer Crescent and across South Alphington.'],
          ['1918–21', 'APM buys "Woodlands"; the paper mill opens (31 Aug 1921).'],
          ['1920–24', 'Locals build the Alphington swimming pool by hand on the riverbank.'],
          ['1921', 'Alphington Bowls Club founded; WWI "Digger" memorial erected in the park.'],
          ['1924', 'Present Alphington schoolhouse built on Yarralea Street.'],
          ['1934', 'Parkside Football Club founded at the Alphington Hotel (19 January).'],
          ['1937', '"Runnymeade House, Elmo Ave" photographed.'],
          ['1940', 'Mrs P. S. Renn&rsquo;s Runnymeade garden wins first prize in <em>The Herald</em>&rsquo;s garden competition; opened for charity.'],
          ['early 1960s', 'The Renn garden era ends; Runnymeade is gone.'],
          ['1962', 'Alphington &amp; Fairfield move from the City of Heidelberg to Northcote.'],
          ['1986', 'The paper mill becomes part of Amcor.'],
          ['1989', 'Alphington Grammar School founded by the Greek Community.'],
          ['1994', 'City of Darebin amalgamation; mill rail siding closes.'],
          ['2001–02', 'Locals partly excavate and restore the old swimming pool.'],
          ['2003', 'Alphington FC — the "Bluetongues" — founded.'],
          ['2012', 'The paper mill closes (December) after ninety years.'],
          ['2015', 'YarraBend redevelopment plan approved.'],
          ['2017', 'Boiler House demolished after the Minister overrules its heritage listing.'],
          ['2021', 'Alphington Bowls Club marks its centenary.'],
        ].map((e) => '<div class="entry"><span class="year">' + e[0] + '</span><p>' + e[1] + '</p></div>').join('')}
      </div>
    </div>
  `,
},

/* ───────────────────────── SOURCES & GAPS ───────────────────────── */
{
  id: 'sources',
  label: 'Sources & gaps',
  render: () => `
    <h2 class="section-title">Sources &amp; gaps</h2>
    <div class="section-dates">How this was put together</div>

    <div class="card">
      <h3>Method</h3>
      <p>This history is compiled from public heritage, archival and local-history sources — each section carries its own citations. Claims are tagged <span class="tag sourced">documented</span>, <span class="tag legend">local legend</span> or <span class="tag uncertain">unverified</span> so record and memory stay distinct. It began, in part, with the <strong>Yarra Trail interpretive signs</strong> on the Alphington riverbank recording the Renn family's Runnymeade gardens and the community-built swimming pool.</p>
    </div>

    <div class="card">
      <h3>Principal sources</h3>
      <ul class="source-list">
        <li><a href="https://www.victorianplaces.com.au/alphington" target="_blank" rel="noopener">Victorian Places — Alphington</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Alphington,_Victoria" target="_blank" rel="noopener">Wikipedia — Alphington, Victoria</a> · <a href="https://en.wikipedia.org/wiki/Alphington_Paper_Mill" target="_blank" rel="noopener">Alphington Paper Mill</a> · <a href="https://en.wikipedia.org/wiki/Parkside_Football_Club" target="_blank" rel="noopener">Parkside FC</a></li>
        <li><a href="https://vhd.heritagecouncil.vic.gov.au/places/177236" target="_blank" rel="noopener">Victorian Heritage Database — Alphington East Precinct (HO362)</a></li>
        <li>City of Yarra Heritage Gap Study Stage 2 (Graeme Butler &amp; Associates, 2009) &amp; Review of Heritage Overlay Areas 2007</li>
        <li><a href="https://adb.anu.edu.au/biography/roemer-charles-william-2601" target="_blank" rel="noopener">Australian Dictionary of Biography — Charles William Roemer</a></li>
        <li><a href="https://www.slv.vic.gov.au/search-discover/explore-collections-format/maps/maps-melbourne-city-suburbs/mmbw-plans" target="_blank" rel="noopener">MMBW Detail Plan 1319 (1911) — State Library Victoria</a> · <a href="https://prov.vic.gov.au/explore-collection/explore-topic/researching-land-and-property/parish-and-township-plans" target="_blank" rel="noopener">Parish plans — PROV</a></li>
        <li><a href="https://www.emelbourne.net.au/biogs/EM00129b.htm" target="_blank" rel="noopener">eMelbourne — Australian Paper Manufacturers</a> · <a href="https://www.theurbandeveloper.com/articles/yarrabend-breakdown-alphington-paper-mill-development" target="_blank" rel="noopener">The Urban Developer — YarraBend</a></li>
        <li>Local groups: <a href="https://www.alphington.org.au/" target="_blank" rel="noopener">Alphington Community Centre / 3078 History</a> · <a href="https://afcivic.org/a-rich-history/" target="_blank" rel="noopener">Alphington Fairfield Civic Association</a> · <a href="https://heritage.darebinlibraries.vic.gov.au/" target="_blank" rel="noopener">Darebin Heritage</a></li>
      </ul>
    </div>

    <div class="card">
      <h3>Open questions — where the record runs out</h3>
      <p>Honest gaps, and the best places to close them (most need a real browser or a library visit):</p>
      <ul>
        <li><strong>The Renn family &amp; Runnymeade</strong> — <em>partly resolved via Trove:</em> Mr P. Renn was a printer; Mrs P. S. Renn won first prize in <em>The Herald</em>&rsquo;s 1940 garden competition. Still open: their full given names and the house&rsquo;s build/demolition dates — try PROV rate books, Sands &amp; McDougall directories, BDM Victoria, Heidelberg Historical Society.</li>
        <li><strong>The Grandview "coaching stage" story</strong> — needs a Trove newspaper find or the full VHD statement to confirm or lay to rest.</li>
        <li><strong>Roemer Crescent subdivision notices</strong> — a browser-based Trove search should surface 1880s–1920s land-sale ads.</li>
        <li><strong>Alphington Primary's early history</strong> — principals, enrolments, the 1885/1908/1924 puzzle: the Darebin Heritage article and PROV school files (VPRS, No. 3599).</li>
        <li><strong>North Alphington Cricket &amp; Netball clubs</strong> — exact founding years.</li>
      </ul>
    </div>

    <div class="callout">
      Corrections and additions welcome — this is a living local history. If you hold a photo, a family memory, or a document that fills one of these gaps, it belongs here.
    </div>
  `,
},

];

/* ─────────────────────── SCHEMATIC MAPS (original SVG) ─────────────────────── */

function MAP_CROWN_PORTIONS() {
  return `
    <div class="card">
      <h3>The 1840 Crown Portions</h3>
      <p style="font-size:0.85rem;color:var(--text-dim);">A schematic of the four riverfront portions sold in 1840. Roemer's Portion 120 — the middle block — became the heart of Manning's Alphington village, and Roemer Crescent traces its river-bend.</p>
      <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:10px;background:#0c1618;margin-top:6px;">
        <!-- river -->
        <path d="M0,250 C120,235 200,275 320,258 C440,242 520,278 640,262 L640,300 L0,300 Z" fill="#20505a" opacity="0.85"/>
        <path d="M0,250 C120,235 200,275 320,258 C440,242 520,278 640,262" fill="none" stroke="#3a8fa0" stroke-width="2.5"/>
        <text x="320" y="288" text-anchor="middle" fill="#8fc4cd" font-size="12" font-style="italic" font-family="sans-serif">Birrarung / Yarra River</text>
        <!-- portions -->
        <g font-family="sans-serif">
          <rect x="20" y="60" width="140" height="180" fill="#182a2d" stroke="#2b4a4f" stroke-width="1.5"/>
          <rect x="160" y="60" width="150" height="185" fill="#182a2d" stroke="#2b4a4f" stroke-width="1.5"/>
          <rect x="310" y="60" width="150" height="192" fill="#c49a54" fill-opacity="0.18" stroke="#c49a54" stroke-width="2.5"/>
          <rect x="460" y="60" width="160" height="198" fill="#182a2d" stroke="#2b4a4f" stroke-width="1.5"/>
          <!-- labels -->
          <text x="90" y="120" text-anchor="middle" fill="#9fb4b3" font-size="15" font-weight="700">118</text>
          <text x="90" y="140" text-anchor="middle" fill="#6d8482" font-size="11">Dowling</text>
          <text x="235" y="120" text-anchor="middle" fill="#9fb4b3" font-size="15" font-weight="700">119</text>
          <text x="235" y="140" text-anchor="middle" fill="#6d8482" font-size="11">G. Howitt</text>
          <text x="385" y="118" text-anchor="middle" fill="#e0bd7d" font-size="16" font-weight="700">120</text>
          <text x="385" y="138" text-anchor="middle" fill="#c49a54" font-size="12" font-weight="600">C.W. Roemer</text>
          <text x="385" y="158" text-anchor="middle" fill="#8a7444" font-size="10">→ Roemer Crescent</text>
          <text x="540" y="120" text-anchor="middle" fill="#9fb4b3" font-size="15" font-weight="700">121</text>
          <text x="540" y="140" text-anchor="middle" fill="#6d8482" font-size="11">T. Wills</text>
          <text x="540" y="158" text-anchor="middle" fill="#6d8482" font-size="10">→ Lucerne</text>
        </g>
        <text x="20" y="40" fill="#8fc4cd" font-size="13" font-weight="700" font-family="sans-serif">Parish of Jika Jika — Crown land sale, 1840</text>
      </svg>
      <p style="font-size:0.75rem;color:var(--text-faint);margin-top:6px;">Schematic only — not to scale. Based on the Parish of Jika Jika plan (PROV) and the City of Yarra heritage citations. View the real plans via the links below.</p>
    </div>
  `;
}

function MAP_ROEMER_STREET() {
  return `
    <div class="card">
      <h3>Roemer Crescent — the curve &amp; its houses</h3>
      <p style="font-size:0.85rem;color:var(--text-dim);">A schematic of the crescent sweeping down to the Yarra, with construction eras from the City of Yarra heritage database. Gold = the oldest houses; the curve's river side "fanned out to Yarra views" and drew the first villas.</p>
      <svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:10px;background:#0c1618;margin-top:6px;">
        <!-- river bottom -->
        <path d="M0,300 C160,285 260,320 640,300 L640,340 L0,340 Z" fill="#20505a" opacity="0.85"/>
        <path d="M0,300 C160,285 260,320 640,300" fill="none" stroke="#3a8fa0" stroke-width="2.5"/>
        <text x="320" y="330" text-anchor="middle" fill="#8fc4cd" font-size="12" font-style="italic" font-family="sans-serif">Yarra River</text>
        <!-- crescent -->
        <path d="M70,90 A300,300 0 0 0 570,90" fill="none" stroke="#4a6a6f" stroke-width="26" stroke-linecap="round" opacity="0.5"/>
        <path d="M70,90 A300,300 0 0 0 570,90" fill="none" stroke="#7fb0b8" stroke-width="2" stroke-dasharray="4 6"/>
        <text x="320" y="250" text-anchor="middle" fill="#cfe3e2" font-size="15" font-weight="700" font-family="sans-serif">ROEMER CRESCENT</text>
        <!-- house dots along curve -->
        <g font-family="sans-serif" font-size="10">
          <!-- No.5 oldest -->
          <circle cx="120" cy="150" r="8" fill="#e0bd7d" stroke="#0c1618" stroke-width="2"/>
          <text x="120" y="135" text-anchor="middle" fill="#e0bd7d" font-weight="700">5</text>
          <text x="120" y="176" text-anchor="middle" fill="#8a7444">1880s</text>
          <!-- No.3 Rosemount -->
          <circle cx="95" cy="120" r="7" fill="#e0bd7d" stroke="#0c1618" stroke-width="2"/>
          <text x="70" y="112" text-anchor="middle" fill="#c49a54">3 · Rosemount</text>
          <!-- interwar dots -->
          <circle cx="200" cy="190" r="7" fill="#4fb8c6" stroke="#0c1618" stroke-width="2"/>
          <text x="200" y="212" text-anchor="middle" fill="#6d8482">6</text>
          <circle cx="290" cy="212" r="7" fill="#4fb8c6" stroke="#0c1618" stroke-width="2"/>
          <text x="290" y="234" text-anchor="middle" fill="#6d8482">8</text>
          <circle cx="380" cy="210" r="7" fill="#4fb8c6" stroke="#0c1618" stroke-width="2"/>
          <text x="380" y="232" text-anchor="middle" fill="#6d8482">12</text>
          <!-- No.14 -->
          <circle cx="450" cy="192" r="8" fill="#9fb4b3" stroke="#0c1618" stroke-width="2"/>
          <text x="450" y="214" text-anchor="middle" fill="#9fb4b3" font-weight="700">14 · Riverview</text>
          <!-- No.7 modern -->
          <circle cx="520" cy="150" r="7" fill="#2b7a86" stroke="#0c1618" stroke-width="2"/>
          <text x="520" y="135" text-anchor="middle" fill="#4fb8c6">7 · 1990s</text>
        </g>
        <text x="20" y="40" fill="#8fc4cd" font-size="13" font-weight="700" font-family="sans-serif">Manning's village subdivision — the river-curve</text>
        <!-- legend -->
        <g font-family="sans-serif" font-size="10">
          <circle cx="30" cy="62" r="5" fill="#e0bd7d"/><text x="42" y="66" fill="#9fb4b3">1880s (oldest)</text>
          <circle cx="160" cy="62" r="5" fill="#4fb8c6"/><text x="172" y="66" fill="#9fb4b3">c.1915–25</text>
          <circle cx="300" cy="62" r="5" fill="#2b7a86"/><text x="312" y="66" fill="#9fb4b3">modern infill</text>
        </g>
      </svg>
      <p style="font-size:0.75rem;color:var(--text-faint);margin-top:6px;">Schematic only — house positions are indicative, not surveyed. Data: City of Yarra Heritage Gap Study (Butler, 2009) &amp; MMBW Plan 1319 (1911).</p>
    </div>
  `;
}
