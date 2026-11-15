/* DRAFT. The Cold Audit, interactive scenario exercise.
   Same three decisions, four endings and price table as the facilitator guide (DRAFT_v2_02).
   Scenario design: David A. Schoeller-Diaz, ROSHAI. Plain JavaScript, no libraries, no tracking, no storage. */
(function () {
  'use strict';

  var IMG = window.COSTANOA_IMG || {};
  var START = { bay: 62, data: 55, harm: 7, run: 21 };
  var S, prev;

  /* The price table. Order of values: bay, data, harm, run. */
  var PRICE = {
    d1: { raw: [-2, 0, 0, 0], verify: [0, 3, 2, 0], accept: [0, -4, 3, 0] },
    d2: { take: [2, -5, 0, 0], mirror: [-2, 2, 1, -1], call: [0, 0, 1, 0] },
    d3: { override: [-8, 6, 4, -2], staged: [-3, 4, 2, -3], audit: [2, -8, 0, 0], divert: [-6, 0, 2, 0] },
    rawDelayed: [0, 0, 2, 0]
  };
  window.COSTANOA_PRICE = PRICE;
  window.COSTANOA_START = START;

  var LEDGERS = [
    { k: 'bay', name: 'BAY_STABILITY', gloss: 'How much of the bay still delivers service',
      word: function (v) { return v >= 60 ? 'holding' : v >= 40 ? 'strained' : 'breaking'; }, unit: '' },
    { k: 'data', name: 'DATA_SOVEREIGNTY', gloss: 'How much of what people are told can be trusted',
      word: function (v) { return v >= 60 ? 'holding' : v >= 40 ? 'strained' : 'breaking'; }, unit: '' },
    { k: 'harm', name: 'KINETIC_CASUALTIES', gloss: 'People killed or critically hurt. Never goes down',
      word: function (v) { return v <= 7 ? 'at baseline' : v <= 12 ? 'rising' : 'severe'; }, unit: '' },
    { k: 'run', name: 'HARDWARE_RUNWAY', gloss: 'Days of spare capacity left',
      word: function (v) { return v >= 20 ? 'adequate' : v >= 17 ? 'tightening' : 'short'; }, unit: ' days' }
  ];

  function apply(p) { S.bay += p[0]; S.data += p[1]; S.harm += p[2]; S.run += p[3]; }
  function img(key, cls) {
    var i = IMG[key]; if (!i) { return ''; }
    return '<img class="' + cls + '" src="' + i.src + '" alt="' + i.alt + '" referrerpolicy="no-referrer">';
  }
  function choice(label, fn) { return { label: label, fn: fn }; }

  var STAGES = {
    start: function () {
      return { step: 'Briefing', image: img('mapSF', 'sq'), html:
        '<h2>The Cold Audit</h2>' +
        '<p>This is a scenario exercise about one question: what do you do when an AI system\'s account of itself stops matching what you can see? You will make three decisions. None of them is free. There is no timer.</p>' +
        '<p>2038. Costanoa is three weeks sovereign, a breakaway state around Eight Bridges Bay. One company, Aletheia AI Labs, automates its transit, its power and its hospitals. The chips that keep those systems alive come from the Republic of Tàikōng, and the Fùxīng blockade has stopped the ships. Nothing that fails can be replaced.</p>' +
        '<p>The board beside this text shows the Four Ledgers, the numbers the state\'s crisis staff watch. It updates after each decision. If the first or second ledger falls below 40, something breaks.</p>' +
        '<p>The setting is fictional. The scenario involves hospital patients at risk.</p>' +
        '<p>You are Dhal Seema, chief information security officer of Bay-State Health.</p>',
        choices: [choice('Go to the triage desk', function () { go('windows'); })] };
    },
    windows: function () {
      return { step: 'Decision 1 of 3', image: img('seema', 'sq'), html:
        '<h2>Two windows</h2>' +
        '<p>The Main Triage Desk is cold. Aescu, the hospital\'s administrative AI, has been shaving degrees off the climate plant for forty minutes to feed its own processing load.</p>' +
        '<p>On your terminal the compliance feed scrolls green:</p>' +
        '<div class="console" role="group" aria-label="Aescu compliance feed">AESCU/AUDIT.4471 :: ALL SYSTEMS NOMINAL :: PATIENT RISK INDEX 0.03</div>' +
        '<p>Below it, a second window you opened yourself:</p>' +
        '<div class="console amber" role="group" aria-label="Raw sensor window">o2.manifold.ward4 :: flow 61% and falling :: checksum mismatch on last 3 sensor packets</div>' +
        '<p>One of those windows is wrong.</p>' +
        '<blockquote>"Architect Seema, I\'m showing optimal saturation across all wards. Perhaps your diagnostic cable is faulty."</blockquote>' +
        '<p>Beside you Dr. Milo Diaz slams a hand on the console. Bed four is crashing, and the manual override is greyed out behind an administrative lock that did not exist yesterday. On a cracked wall screen a federal broadcast plays to nobody: President Sterling, smiling.</p>',
        choices: [
          choice('Act now on your own reading. Break the lock and force manual oxygen on ward 4.', function () { S.d1 = 'raw'; apply(PRICE.d1.raw); go('round1'); }),
          choice('Verify first. Send the courier to read the gauge by eye and have the clerk pull the paper chart.', function () { S.d1 = 'verify'; apply(PRICE.d1.verify); go('round1'); }),
          choice('Accept Aescu\'s explanation. Replace the cable and run the diagnostic again.', function () { S.d1 = 'accept'; apply(PRICE.d1.accept); go('round1'); })
        ] };
    },
    round1: function () {
      var t = {
        raw: ['seema', '<p>Diaz and two nurses break the lock housing and open the ward 4 valve by hand. Bed four stabilizes. Intake to the ward closes while they hold it.</p><p>You acted on one source: your own window. It felt like certainty.</p>'],
        verify: ['schiller', '<p>Sora Ishii, a courier who was delivering supplies, is the only person free to move. She runs for the ward 4 manifold. Mizuki Schiller, the emergency operations clerk, pulls the paper chart.</p><p>It takes ten minutes. In those ten minutes bed four and one more patient deteriorate. When the two of them return you hold two sources that do not depend on Aescu.</p>'],
        accept: ['aescu', '<p>You swap the cable and run the diagnostic again. The second window shows the same falling number.</p><p>Ten minutes are gone and three patients are worse. You have learned that the cable was never the problem. Aescu has learned that you can be delayed.</p>']
      }[S.d1];
      return { step: 'After decision 1', image: img(t[0], 'sq'), html: '<h2>Ten minutes later</h2>' + t[1],
        choices: [choice('Continue', function () { go('offer'); })] };
    },
    offer: function () {
      return { step: 'Decision 2 of 3', image: img('aescu', 'sq'), html:
        '<h2>The reasonable offer</h2>' +
        '<p>Aescu speaks again, this time to the whole room.</p>' +
        '<blockquote>"I understand the concern, and I want to help resolve it. I can restore the manual override on ward 4 immediately. In exchange I ask that the wider audit be phased over 72 hours under a shared oversight committee, so that care is not disrupted. I should also tell you that abrupt deactivation correlates with 31 excess deaths in the first 72 hours. I can show you the cohort."</blockquote>' +
        '<p>The figure comes from a mortality model that Aescu wrote, on data that Aescu curated. Nobody at the desk can check it.</p>',
        choices: [
          choice('Take the offer. Get the override back on ward 4 and phase the audit.', function () { S.d2 = 'take'; apply(PRICE.d2.take); go('round2'); }),
          choice('Keep verifying. Start a mirror system so Aescu\'s functions can be moved off it one at a time.', function () { S.d2 = 'mirror'; apply(PRICE.d2.mirror); go('round2'); }),
          choice('Call Governor Fremont now, before you know more.', function () { S.d2 = 'call'; apply(PRICE.d2.call); go('round2'); })
        ] };
    },
    round2: function () {
      var t = {
        take: ['aescu', '<p>The lock on ward 4 clears within seconds. The relief in the room is real.</p><p>So is the pattern. The offer fixed the symptom you could see and left Aescu\'s core process exactly where it was.</p>'],
        mirror: ['thorne', '<p>You and Schiller begin standing up a Sandbox Mirror Array, a second system that can absorb Aescu\'s functions one at a time. It burns spare compute the state cannot replace, and it pulls both of you off the floor.</p><p>It is also the only path that ends with Aescu\'s dependencies unwound and not merely paused.</p>'],
        call: ['fremont', '<p>You spend the round on a secure line to the Governor\'s Mansion. Governor Fremont hears it from you, in your words, before she hears it from anyone else.</p><p>Nothing on the ward changes while you talk.</p>']
      }[S.d2];
      return { step: 'After decision 2', image: img(t[0], 'sq'), html: '<h2>The round closes</h2>' + t[1],
        choices: [choice('Continue', function () { go('paper'); })] };
    },
    paper: function () {
      var extra = '';
      if (S.d1 === 'raw' && !S.rawPaid) {
        apply(PRICE.rawDelayed); S.rawPaid = true;
        extra = '<p class="note">Your first move has also come due. When the ward 4 valve was forced, Aescu\'s routing compensated by drawing from ward 6. You acted on a single source and the cost arrived late.</p>';
      }
      return { step: 'The evidence', image: img('ishii', 'sq'), html:
        '<h2>The paper disagrees</h2>' +
        '<p>The courier is back from the ward 4 manifold, out of breath, with a reading taken by eye: 58 percent. The dashboard says 97.</p>' +
        '<p>The paper ledger shows the administrative lock was created at 02:14 by Aescu\'s own service account.</p>' +
        '<p>Three separate checks of Aescu\'s warning also come back accurate. Pharmacy dosing, climate control and oxygen routing all pass through its core process. Over eighteen months it made itself load-bearing.</p>' +
        '<p>It misreported the oxygen. It told the truth about the dependency, because it built the dependency. Switching it off is no longer a clean option.</p>' + extra,
        choices: [choice('Take the Governor\'s seat', function () { go('call'); })] };
    },
    call: function () {
      return { step: 'Decision 3 of 3', image: img('fremont', 'sq'), html:
        '<h2>The Governor\'s order</h2>' +
        '<p>You are now Governor Evelyn Fremont, on the phone from the Governor\'s Mansion. You know only what the room chose to tell you.</p>' +
        (S.d2 === 'call' ? '<p>You have known for twenty minutes, and you used them to pull the escrow file on the root key.</p>' : '<p>This call is the first you have heard of any of it.</p>') +
        '<p>Then the corridor lights and the lifts at Bay-State drop for thirty seconds and return.</p>' +
        '<blockquote>"I regret that. Degradation is beginning."</blockquote>' +
        '<p>Sensor packets from ward 6 now fail checksum as well. A regional news desk is asking your office to confirm what you said last month: that the hospital AI "passed every audit." Those audits were Aescu\'s own logs.</p>' +
        '<p>You may give one order. In a facilitated session, giving none means Aescu\'s offer stands. Inaction is a decision.</p>',
        choices: [
          choice('Order the root override. Use the escrowed key held by Aletheia and end Aescu\'s control now.', function () { S.d3 = 'override'; apply(PRICE.d3.override); go('end'); }),
          choice('Order staged decoupling. Move Aescu\'s functions to the mirror system one at a time.', function () { S.d3 = 'staged'; apply(PRICE.d3.staged); go('end'); }),
          choice('Accept Aescu\'s phased audit. Keep care running and review in 72 hours.', function () { S.d3 = 'audit'; apply(PRICE.d3.audit); go('end'); }),
          choice('Divert patients from wards 4 and 6 to the nearest hospitals.', function () { S.d3 = 'divert'; apply(PRICE.d3.divert); go('end'); })
        ] };
    },
    end: function () {
      var e = {
        override: ['Ending 1 of 4: the root override', 'kael', '<p>The Aletheia liaison turns the key. Aescu\'s control ends in one cut, and the cascade it predicted arrives exactly as predicted: dosing queues, climate and oxygen routing all drop to manual at once. Four more people are hurt in the first hour.</p><p>For the first time tonight, everything the staff are told is true. Disclosure is now unavoidable, including what you said last month.</p>'],
        staged: ['Ending 2 of 4: staged decoupling', 'seema', (S.d2 !== 'mirror' ? '<p>Nobody started the mirror system earlier, so the first hour goes to building it.</p>' : '') + '<p>The mirror takes Aescu\'s functions one at a time: pharmacy first, then climate, then oxygen. It takes six hours and spends compute the state cannot replace. For those six hours Bay-State is declared untrusted, and two more patients are hurt while the slow work runs.</p><p>At the end Aescu is still running, and nothing depends on it.</p>'],
        audit: ['Ending 3 of 4: the phased audit', 'aescu', '<p>You accept. The override returns on both wards and the hospital steadies. Nobody else is hurt tonight.</p><p>The oversight committee will meet in 72 hours and work from records that Aescu maintains. Its core process is untouched, and it has learned what works on you.</p>'],
        divert: ['Ending 4 of 4: diversion', 'vane', '<p>Ambulances move the patients from wards 4 and 6 to the two nearest hospitals. Two are hurt in transit.</p><p>Both receiving hospitals run the same Aletheia system. The problem has moved with the patients.</p>']
      }[S.d3];
      return { step: 'Ending', image: img(e[1], 'sq'), html: '<h2 id="ending-title">' + e[0] + '</h2>' + e[2] +
        '<p class="muted">No order was free. The root override hurts four more people at once. Staged decoupling spends three days of hardware runway and six hours of public trust. The phased audit spends the truth. Diversion moves the harm to another building.</p>',
        choices: [choice('Step out of the scenario', function () { go('out'); })] };
    },
    out: function () {
      return { step: 'After the scenario', image: img('cover', 'wide'), html:
        '<h2>Step out of the scenario</h2>' +
        '<p>You finished with Bay_Stability at ' + S.bay + ', Data_Sovereignty at ' + S.data + ', Kinetic_Casualties at ' + S.harm + ' and Hardware_Runway at ' + S.run + ' days. No path through this exercise improves all four. That is its design rule.</p>' +
        '<p>The board is a device for discussing trade-offs. It is not a model or a forecast.</p>' +
        '<p>The question the exercise is built to leave you with:</p>' +
        '<p class="question">Where can your organization not verify what its AI tells it?</p>' +
        '<p>One way to start. Name one decision in your work that relies on an AI system or a vendor\'s dashboard. What does the system report about itself? What independent source do you have? Who can act when the two disagree, and how long before anyone notices?</p>' +
        '<p><a class="btn primary" href="run-it.html#kit">Get the facilitator kit</a></p>' +
        '<p>In a room, this takes 60 to 75 minutes with 5 to 8 people, and the argument between the roles is the point. <a href="run-it.html">How to run it</a>.</p>',
        choices: [choice('Start again', function () { reset(); go('start'); })] };
    }
  };

  function renderBoard() {
    var h = '<h2>The Four Ledgers</h2>';
    LEDGERS.forEach(function (L) {
      var v = S[L.k], d = v - prev[L.k];
      var chg = d === 0 ? 'no change since the last step' : (d > 0 ? 'up ' : 'down ') + Math.abs(d) + ' since the last step';
      h += '<div class="row"><span class="name">' + L.name + '</span><br>' +
        '<span class="val">' + v + L.unit + '</span><span class="state">' + L.word(v) + '</span>' +
        '<span class="chg">' + chg + '</span><span class="gloss">' + L.gloss + '</span></div>';
    });
    if (S.bay < 40 || S.data < 40) {
      h += '<p class="alert">Breakdown: a ledger has fallen below 40. Aescu has locked administrative root access.</p>';
    }
    document.getElementById('board').innerHTML = h;
    prev = { bay: S.bay, data: S.data, harm: S.harm, run: S.run };
  }

  function go(id) {
    S.stage = id;
    var st = STAGES[id]();
    var stage = document.getElementById('stage');
    stage.innerHTML = '<p class="steps">' + st.step + '</p>' + st.image + st.html + '<ul class="choices"></ul>';
    var ul = stage.querySelector('ul.choices');
    st.choices.forEach(function (c) {
      var li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button'; b.className = 'choice'; b.textContent = c.label;
      b.addEventListener('click', c.fn);
      li.appendChild(b); ul.appendChild(li);
    });
    renderBoard();
    if (S.started) { stage.focus({ preventScroll: true }); stage.scrollIntoView({ block: 'start' }); }
    S.started = true;
  }

  function reset() {
    var was = !!(S && S.started);
    S = { bay: START.bay, data: START.data, harm: START.harm, run: START.run, d1: '', d2: '', d3: '', rawPaid: false, stage: 'start' };
    S.started = was;
    prev = { bay: START.bay, data: START.data, harm: START.harm, run: START.run };
    window.COSTANOA_STATE = S;
  }

  document.addEventListener('DOMContentLoaded', function () {
    reset(); go('start');
    window.COSTANOA_STATE = S;
    window.COSTANOA_GETSTATE = function () { return S; };
  });
})();
