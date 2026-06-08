window.addEventListener('DOMContentLoaded', () => {
    const timelineData = {
        may1989: { title: "May 1989 - Ominous Sightings", body: "Multiple witnesses reported seeing a tall, creepy man wandering deep within the Göhrde state forest. He was seen closely observing parked cars." },
        july12: { title: "July 12, 1989 - The First Disappearance", body: "Peter and Ursula Reinold venture into the isolated woods for a casual summer hike. They completely vanish." },
        july27: { title: "July 27, 1989 - Double Horror Discovery", body: "While berry pickers stumble upon the remains of the Reinolds, the killer strikes again just 800 meters away." },
        year1993: { title: "1993 - Suspect Arrest & Fatal Secret", body: "Kurt-Werner Wichmann is stopped. A secret soundproof room is found. He hangs himself in prison." },
        year2017: { title: "2017+ - Full Forensic Convergence", body: "Advanced DNA mapping connects Wichmann's precise biological signature to the victims' car." }
    };
    const timelineModal = document.getElementById('timeline-modal'); const timelineTitle = document.getElementById('timeline-title'); const timelineBody = document.getElementById('timeline-body'); const timelineClose = document.querySelector('.timeline-modal-close');
    document.querySelectorAll('.timeline-event').forEach(eventEl => { eventEl.addEventListener('click', () => { const key = eventEl.getAttribute('data-timeline'); if (timelineData[key]) { timelineTitle.textContent = timelineData[key].title; timelineBody.textContent = timelineData[key].body; timelineModal.classList.add('active'); } }); });
    timelineClose.addEventListener('click', () => { timelineModal.classList.remove('active'); });
    const theoryModal = document.getElementById('theory-modal'); const theoryBtn = document.getElementById('theory-summary-btn'); const theoryClose = document.querySelector('.theory-modal-close');
    theoryBtn.addEventListener('click', () => { theoryModal.classList.add('active'); }); theoryClose.addEventListener('click', () => { theoryModal.classList.remove('active'); });
    const previewModal = document.getElementById('preview-modal'); const previewBody = document.getElementById('preview-modal-body'); const previewClose = document.querySelector('.modal-close');
    document.querySelectorAll('.board-item').forEach(item => { item.addEventListener('click', (e) => { if (e.target.classList.contains('pin')) return; previewBody.innerHTML = item.outerHTML; previewModal.classList.add('active'); }); });
    previewClose.addEventListener('click', () => { previewModal.classList.remove('active'); });
    window.addEventListener('click', (e) => { if (e.target === timelineModal) timelineModal.classList.remove('active'); if (e.target === previewModal) previewModal.classList.remove('active'); if (e.target === theoryModal) theoryModal.classList.remove('active'); });
});