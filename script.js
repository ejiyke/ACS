/**
 * ACS - Accounting & Computer Solutions, Inc.
 * Interactive script: Header, Modals, Forms, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Header Scroll Effect ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Navigation Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // --- Consultation Modal ---
  const consultationModal = document.getElementById('consultationModal');
  const openConsultationBtn = document.getElementById('openConsultationBtn');
  const mobileConsultationBtn = document.getElementById('mobileConsultationBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const consultServiceSelect = document.getElementById('consultService');
  const consultationForm = document.getElementById('consultationForm');

  const openModal = (serviceName = null) => {
    if (consultationModal) {
      if (serviceName && consultServiceSelect) {
        consultServiceSelect.value = serviceName;
      }
      consultationModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (consultationModal) {
      consultationModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (openConsultationBtn) {
    openConsultationBtn.addEventListener('click', () => openModal());
  }

  const openTeamingBtn = document.getElementById('openTeamingBtn');
  if (openTeamingBtn) {
    openTeamingBtn.addEventListener('click', () => openModal('Prime / Subcontractor Teaming'));
  }

  const downloadCapabilityBtn = document.getElementById('downloadCapabilityBtn');
  if (downloadCapabilityBtn) {
    downloadCapabilityBtn.addEventListener('click', () => {
      showToast('Downloading official ACS Capability Statement PDF briefing...');
    });
  }

  if (mobileConsultationBtn) {
    mobileConsultationBtn.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
      openModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Close when clicking modal backdrop
  if (consultationModal) {
    consultationModal.addEventListener('click', (e) => {
      if (e.target === consultationModal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && consultationModal && consultationModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Connect "Learn more" links in Service cards to modal prefilled with that practice
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    const serviceName = card.getAttribute('data-service');
    const link = card.querySelector('.open-service-detail');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(serviceName);
      });
    }
  });

  // --- Toast Notification Helper ---
  const toastNotice = document.getElementById('toastNotice');
  const showToast = (message) => {
    if (toastNotice) {
      toastNotice.textContent = message;
      toastNotice.classList.add('show');
      setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 4000);
    }
  };

  // --- Form Submissions ---
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal();
      consultationForm.reset();
      showToast('Thank you! Your consultation request has been received. Our leadership team will reach out shortly.');
    });
  }

  const briefingForm = document.getElementById('briefingForm');
  const briefingEmail = document.getElementById('briefingEmail');

  if (briefingForm) {
    briefingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = briefingEmail ? briefingEmail.value : '';
      if (email) {
        briefingForm.reset();
        showToast('Thank you! An executive briefing packet will be sent to ' + email);
      }
    });
  }

  const servicesInquiryForm = document.getElementById('servicesInquiryForm');
  if (servicesInquiryForm) {
    servicesInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      servicesInquiryForm.reset();
      showToast('Thank you! Our veteran solutions team will get in touch with you shortly.');
    });
  }

  // --- Digital Inquiry Form (contact.html) ---
  const digitalInquiryForm = document.getElementById('digitalInquiryForm');
  if (digitalInquiryForm) {
    digitalInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('inquiryFirstName')?.value || 'there';
      digitalInquiryForm.reset();
      showToast(`Thank you, ${firstName}! Your inquiry has been encrypted and submitted to our procurement team.`);
    });
  }

  // --- Copy Email Button (contact.html) ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const procurementEmail = document.getElementById('procurementEmail');
  if (copyEmailBtn && procurementEmail) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailText = procurementEmail.textContent.trim();
      try {
        await navigator.clipboard.writeText(emailText);
        const originalHtml = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color: #10b981;">Copied!</span>
        `;
        showToast('Procurement email copied to clipboard!');
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalHtml;
        }, 2500);
      } catch (err) {
        showToast('Email: ' + emailText);
      }
    });
  }

  // --- Career Application Form & Resume Dropzone (careers.html) ---
  const careerApplicationForm = document.getElementById('careerApplicationForm');
  const resumeDropzone = document.getElementById('resumeDropzone');
  const resumeFileInput = document.getElementById('resumeFileInput');

  if (resumeDropzone && resumeFileInput) {
    resumeDropzone.addEventListener('click', () => {
      resumeFileInput.click();
    });

    resumeFileInput.addEventListener('change', () => {
      if (resumeFileInput.files.length > 0) {
        const fileName = resumeFileInput.files[0].name;
        const textEl = resumeDropzone.querySelector('.dropzone-text');
        if (textEl) {
          textEl.innerHTML = `Selected file: <strong>${fileName}</strong>`;
        }
      }
    });

    // Drag & Drop
    ['dragenter', 'dragover'].forEach(eventName => {
      resumeDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        resumeDropzone.style.borderColor = 'var(--color-cyan)';
        resumeDropzone.style.backgroundColor = '#f0f9ff';
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      resumeDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        resumeDropzone.style.borderColor = '';
        resumeDropzone.style.backgroundColor = '';
      });
    });

    resumeDropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        const textEl = resumeDropzone.querySelector('.dropzone-text');
        if (textEl) {
          textEl.innerHTML = `Selected file: <strong>${file.name}</strong>`;
        }
      }
    });
  }

  if (careerApplicationForm) {
    careerApplicationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      careerApplicationForm.reset();
      const textEl = resumeDropzone?.querySelector('.dropzone-text');
      if (textEl) {
        textEl.innerHTML = 'Drag & drop your resume here or <span>click to browse</span>';
      }
      showToast('Application submitted successfully! Our acquisition team will review your resume.');
    });
  }

  // --- Smooth Scroll Offset Compensation ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 88;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

