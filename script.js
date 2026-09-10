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
