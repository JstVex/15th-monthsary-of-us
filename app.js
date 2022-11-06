const container = document.querySelector('.container-fluid');
const firstPhase = document.querySelector('.firstPhase');
const btn11 = document.querySelector('#btn11');
const btn12 = document.querySelector('#btn12');
const fH1 = document.querySelector('#fH1');

btn11.addEventListener('click', () => {
    firstPhase.style.display = "none";
    const secondPhase = document.createElement('div');
    secondPhase.classList.add('secondPhase')
    const fH2 = document.createElement('h1');
    fH2.innerHTML = "Here is the first Q."
    fH2.classList.add('fH2');
    const f2H4 = document.createElement('h4');
    f2H4.innerHTML = "Are you Eapm? (aka hhll's one and only love)"
    f2H4.classList.add('f2H4');
    const btn2 = document.createElement('div');
    btn2.classList.add('btn1');
    const btn21 = document.createElement('button');
    btn21.classList.add('btn', 'btn-outline-success');
    const btn22 = document.createElement('button');
    btn22.classList.add('btn', 'btn-outline-danger');
    const h221 = document.createElement('h2');
    h221.innerHTML = "Yes";
    const h222 = document.createElement('h2');
    h222.innerHTML = "No";
    btn21.append(h221);
    btn22.append(h222);
    btn2.append(btn21, btn22);
    secondPhase.append(fH2, f2H4, btn2);
    container.append(secondPhase);
    btn21.addEventListener('click', () => {
        secondPhase.style.display = 'none';
        const thirdPhase = document.createElement('div');
        thirdPhase.classList.add('thirdPhase')
        const fH3 = document.createElement('h1');
        fH3.innerHTML = "Are you sure?"
        fH3.classList.add('fH3');
        const f3H4 = document.createElement('h4');
        f3H4.innerHTML = "What secrets do hhll and eapm hold *eyes pyuu emoji*?"
        f3H4.classList.add('f3H4');
        const btn3 = document.createElement('div');
        btn3.classList.add('btn1');
        const btn31 = document.createElement('button');
        btn31.classList.add('btn', 'btn-outline-warning');
        const btn32 = document.createElement('button');
        btn32.classList.add('btn', 'btn-outline-warning');
        const h231 = document.createElement('h2');
        h231.innerHTML = "Shhhhh";
        const h232 = document.createElement('h2');
        h232.innerHTML = "Tf?";
        btn31.append(h231);
        btn32.append(h232);
        btn3.append(btn31, btn32);
        thirdPhase.append(fH3, f3H4, btn3);
        container.append(thirdPhase);
        btn31.addEventListener('click', () => {
            thirdPhase.style.display = 'none';
            const forthPhase = document.createElement('div');
            forthPhase.classList.add('forthPhase')
            const fH4 = document.createElement('h1');
            fH4.innerHTML = "Hello boo boo UwU"
            fH4.classList.add('fH4');
            const f4H4 = document.createElement('h4');
            f4H4.innerHTML = "You are about to face sth u can never turn back from boo boo."
            f4H4.classList.add('f4H4');
            const f4sH4 = document.createElement('h4');
            f4sH4.innerHTML = "Are you ready boo boo lyy?";
            f4sH4.classList.add('f4sH4');
            const btn4 = document.createElement('div');
            btn4.classList.add('btn41');
            const btn41 = document.createElement('button');
            btn41.classList.add('btn', 'btn-outline-success');
            const btn42 = document.createElement('button');
            btn42.classList.add('btn', 'btn-outline-danger');
            const h241 = document.createElement('h2');
            h241.innerHTML = "Yes";
            const h242 = document.createElement('h2');
            h242.innerHTML = "No";
            btn41.append(h241);
            btn42.append(h242);
            btn4.append(btn41, btn42);
            forthPhase.append(fH4, f4H4, f4sH4, btn4);
            container.append(forthPhase);
            btn41.addEventListener('click', () => {
                forthPhase.style.display = 'none';
                const fifthPhase = document.createElement('div');
                fifthPhase.classList.add('fifthPhase')
                const fH5 = document.createElement('h1');
                fH5.innerHTML = "R u sure ure ready boo boo?"
                fH5.classList.add('fH5');
                const f5H4 = document.createElement('h4');
                f5H4.innerHTML = "R u sure ure mature enough to handle all the possible consequences?"
                f5H4.classList.add('f5H4');
                const f5sH4 = document.createElement('h4');
                f5sH4.innerHTML = "R u mentally n physically prepared for this?";
                f5sH4.classList.add('f5sH4');
                const btn5 = document.createElement('div');
                btn5.classList.add('btn51');
                const btn51 = document.createElement('button');
                btn51.classList.add('btn', 'btn-outline-success');
                const btn52 = document.createElement('button');
                btn52.classList.add('btn', 'btn-outline-danger');
                const h251 = document.createElement('h2');
                h251.innerHTML = "Yes";
                const h252 = document.createElement('h2');
                h252.innerHTML = "No";
                btn51.append(h251);
                btn52.append(h252);
                btn5.append(btn51, btn52);
                fifthPhase.append(fH5, f5H4, f5sH4, btn5);
                container.append(fifthPhase);
                btn51.addEventListener('click', () => {
                    fifthPhase.style.display = "none";
                    const sixthPhase = document.createElement('div');
                    sixthPhase.classList.add('sixthPhase');
                    const fH6 = document.createElement('h1');
                    fH6.classList.add('fH6');
                    const numberSwitch = (num, delay) => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                fH6.innerHTML = num;
                                resolve();
                            }, delay)
                        })
                    }
                    numberSwitch('100', 1000)
                        .then(() => numberSwitch('99', 1000))
                        .then(() => numberSwitch('98', 1000))
                        .then(() => numberSwitch('80', 1000))
                        .then(() => numberSwitch('69', 1000))
                        .then(() => numberSwitch('50', 1000))
                        .then(() => numberSwitch('20', 1000))
                        .then(() => numberSwitch('10', 1000))
                        .then(() => numberSwitch('9', 1000))
                        .then(() => numberSwitch('8', 1000))
                        .then(() => numberSwitch('7', 1000))
                        .then(() => numberSwitch('6.9', 1000))
                        .then(() => numberSwitch('6', 1000))
                        .then(() => numberSwitch('5', 1000))
                        .then(() => numberSwitch('4', 1000))
                        .then(() => numberSwitch('3.9', 1000))
                        .then(() => numberSwitch('3.8', 1000))
                        .then(() => numberSwitch('3.7', 1000))
                        .then(() => numberSwitch('3', 1000))
                        .then(() => numberSwitch('2.99', 1000))
                        .then(() => numberSwitch('2.98', 1000))
                        .then(() => numberSwitch('2.1', 1000))
                        .then(() => numberSwitch('2', 1000))
                        .then(() => numberSwitch('1.9', 1000))
                        .then(() => numberSwitch('1.75', 1000))
                        .then(() => numberSwitch('1.5', 1000))
                        .then(() => numberSwitch('1.2', 1000))
                        .then(() => numberSwitch('1.19', 1000))
                        .then(() => numberSwitch('1.18', 1000))
                        .then(() => numberSwitch('1.175', 1000))
                        .then(() => numberSwitch('1.5', 1000))
                        .then(() => numberSwitch('1.25', 1000))
                        .then(() => numberSwitch('1.225', 1000))
                        .then(() => numberSwitch('1.19', 1000))
                        .then(() => numberSwitch('1.1', 1000))
                        .then(() => numberSwitch('1', 1000))
                        .then(() => numberSwitch('0', 1000))
                    const btn6 = document.createElement('button');
                    btn6.classList.add('btn6', 'btn', 'btn-outline-light');
                    const h26 = document.createElement('h2');
                    h26.innerHTML = "Click here UwU";
                    btn6.append(h26);
                    sixthPhase.append(fH6, btn6);
                    container.append(sixthPhase);
                    btn6.addEventListener('click', () => {
                        sixthPhase.style.display = "none";
                        const para = document.createElement('p');
                        para.innerHTML = 'i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u i love u'
                        para.classList.add('para');
                        container.style.backgroundColor = 'white';
                        container.style.color = 'black';
                        const popup = document.createElement('div');
                        const content = document.createElement('h3');
                        popup.classList.add('popup');
                        content.classList.add('content');
                        content.innerHTML = " ~ Happy 15th monthsary my most precious eapm lyy :33 ~  Thank u for everything u hv done for me starting from loving me more than anything and caring for me so much to always making me feel so happi n special and always being the best ever. I want u to know ure the best girl anyone could ever find n tht any boy tht hv u in his life is truely the most luckiest n special guy ever. Im so glad i got to be tht guy boo boo :3. Sorry if i cant buy u special gitfs boo boo:(. But i hope this make u feel special :3. uk i want to always keep my precious eapm lyy special n happi n feel great. i never want to make my eapm lyy feel sad or sate nyit or anything bad. i will try my best not to ever again boo boo. pls forgive me for everything. Again happi monthsary boo boo UwU pls stay happi tdy n everyday of course :3. i love u so so soooo muchh my boo boo lyy :333"
                        const canvas = document.createElement('canvas');
                        canvas.setAttribute('id', 'my-canvas')
                        popup.append(content);
                        container.append(para, popup, canvas);
                        var confettiSettings = { target: 'my-canvas' };
                        var confetti = new ConfettiGenerator(confettiSettings);
                        confetti.render();
                    })
                })
                btn52.addEventListener('click', () => {
                    fifthPhase.style.display = "none";
                    const fifth2Phase = document.createElement('div');
                    fifth2Phase.classList.add('fifth2Phase')
                    const image2 = document.createElement('img');
                    image2.src = 'https://dsm01pap007files.storage.live.com/y4m6dDFHvyjxz5m_OaA-SBkMDwpA3WLguGBc_8ToSEj30la9fR4j-euLF2Sn_1lyiRk-64fqPfCUUmkB55dNAP_kXVFpQPql7dXF3nhoKXWEdZO8XoYzl6T7AJJWMdYEHMbeVrHZodnORNuPK_vCARMUKTTSO4JWH7ugtGCMZxoriOAvnT3dMGxGQLLdMdbsH6q?width=1032&height=1378&cropmode=none';
                    const f52H4 = document.createElement('h4');
                    f52H4.innerHTML = "Cottagecore vibes to chill boo boo :3"
                    f52H4.classList.add('f52H4');
                    const btn52 = document.createElement('div');
                    btn52.classList.add('btn52');
                    const btn521 = document.createElement('button');
                    btn521.classList.add('btn', 'btn-outline-warning');
                    const btn522 = document.createElement('button');
                    btn522.classList.add('btn', 'btn-outline-warning');
                    const h2521 = document.createElement('h2');
                    h2521.innerHTML = "I'm readyy";
                    const h2522 = document.createElement('h2');
                    const a52 = document.createElement('a');
                    a52.classList.add('text-white');
                    a52.innerHTML = "Music pls"
                    a52.setAttribute('href', 'https://www.youtube.com/watch?v=nhEoqAIozRM&t=14s');
                    a52.setAttribute('target', '__blank');
                    h2522.append(a52);
                    btn521.append(h2521);
                    btn522.append(h2522);
                    btn52.append(btn521, btn522);
                    fifth2Phase.append(image2, f52H4, btn52);
                    container.append(fifth2Phase);
                    btn521.addEventListener('click', () => {
                        fifth2Phase.style.display = "none";
                        fifthPhase.style.display = "flex";
                        container.append(fifthPhase)
                    })
                })

            })
            btn42.addEventListener('click', () => {
                forthPhase.style.display = 'none';
                const forth2Phase = document.createElement('div');
                forth2Phase.classList.add('forth2Phase')
                const image = document.createElement('img');
                image.src = 'https://dsm01pap007files.storage.live.com/y4meAoldNpWVPgQT968pjLWdA1RS8woRYoY7bc7-VJhSt8C43_C-SV5B1cJ9nulJovFcnJYAf9jDQrIR_OTszlMyes8-7OC1A6nLjtnaznRounaKgwDDZ4Zk7M8vn00wPTl5f-TJeg-eWY6nVUNc7Df3KJW39sroFk-gtx-Bbtq7DUeXSCDsiqyfax9ZuOPUnkh?width=1032&height=1376&cropmode=none';
                const f42H4 = document.createElement('h4');
                f42H4.innerHTML = "Here is a charcoal pic pic to relax ur mind mind UwU"
                f42H4.classList.add('f42H4');
                const btn42 = document.createElement('div');
                btn42.classList.add('btn42');
                const btn421 = document.createElement('button');
                btn421.classList.add('btn', 'btn-outline-warning');
                const btn422 = document.createElement('button');
                btn422.classList.add('btn', 'btn-outline-warning');
                const h2421 = document.createElement('h2');
                h2421.innerHTML = "I'm readyy";
                const h2422 = document.createElement('h2');
                const a42 = document.createElement('a');
                a42.classList.add('text-white');
                a42.innerHTML = "Music pls"
                a42.setAttribute('href', 'https://www.youtube.com/watch?v=QH2-TGUlwu4&t=8s');
                a42.setAttribute('target', '__blank');
                h2422.append(a42);
                btn421.append(h2421);
                btn422.append(h2422);
                btn42.append(btn421, btn422);
                forth2Phase.append(image, f42H4, btn42);
                container.append(forth2Phase);
                btn421.addEventListener('click', () => {
                    forth2Phase.style.display = "none";
                    forthPhase.style.display = "flex";
                    container.append(forthPhase)
                })
            })
        });
        btn32.addEventListener('click', () => {
            thirdPhase.style.display = 'none';
            const third2Phase = document.createElement('div');
            third2Phase.classList.add('third2Phase')
            const fH32 = document.createElement('h1');
            fH32.innerHTML = "U R NOT EAPM"
            fH32.classList.add('fH32', 'text-danger');
            const btn232 = document.createElement('button');
            btn232.classList.add('btn', 'btn-outline-danger', 'btn1');
            const a3 = document.createElement('a');
            a3.innerHTML = "NO RETURN";
            a3.classList.add('text-white')
            a3.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            btn232.append(a3);
            third2Phase.append(fH32, btn232);
            container.append(third2Phase);
        })
    })
    btn22.addEventListener('click', () => {
        secondPhase.style.display = "none";
        const second2Phase = document.createElement('div');
        second2Phase.classList.add('second2Phase')
        const fH22 = document.createElement('h1');
        fH22.innerHTML = "THEN WHY R U HERE?"
        fH22.classList.add('fH22', 'text-danger');
        const btn222 = document.createElement('button');
        btn222.classList.add('btn', 'btn-outline-danger', 'btn1');
        const a2 = document.createElement('a');
        a2.innerHTML = "NO RETURN";
        a2.classList.add('text-white')
        a2.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        btn222.append(a2);
        second2Phase.append(fH22, btn222);
        container.append(second2Phase);
    })


})

btn12.addEventListener('click', () => {
    firstPhase.style.display = "none";
    const secondPhase = document.createElement('div');
    secondPhase.classList.add('secondPhase')
    const fH2 = document.createElement('h1');
    fH2.innerHTML = "U WILL REGRET CHOOSING NO!"
    fH2.classList.add('fH2', 'text-danger');
    const btn22 = document.createElement('button');
    btn22.classList.add('btn', 'btn-outline-danger', 'btn1');
    const a = document.createElement('a');
    a.innerHTML = "NO RETURN";
    a.classList.add('text-white')
    a.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    btn22.append(a);
    secondPhase.append(fH2, btn22);
    container.append(secondPhase);



})

