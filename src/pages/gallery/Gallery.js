import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import galleryItems from './Items';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);


  const filters = ['All', 'Facilities', 'Events', 'Structures'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gallery-hero-content"
          >
            <h1 className="gallery-hero-title">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="gallery-hero-subtitle">
              Explore our diverse Collection Creativity!
            </p>
          </motion.div>
        </div>
      </div>

      <section className="gallery-section section">
        <div className="conx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gallery-filters"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="gallery-grid"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                  onClick={() => openLightbox(item)}
                  whileHover={{ y: -10 }}
                >
                  <div className="gallery-image">
                    <img src={item.image} alt="{item.title}" />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h3 className="gallery-title">{item.title}</h3>
                        <p className="gallery-category">{item.category}</p>
                        <div className="gallery-icon">
                          <lord-icon
                            src="https://cdn.lordicon.com/eszyyflr.json"
                            trigger="hover"
                            colors={`primary:"#ff00ff",secondary:"#ffff00"`}
                            style={{width: '30px', height: '30px'}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <lord-icon
                  src="https://cdn.lordicon.com/nqtddedc.json"
                  trigger="hover"
                  colors={`primary:"#ff00ff",secondary:"#ffff00"`}
                  style={{width: '24px', height: '24px'}}
                />
              </button>
              <div className="lightbox-image">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>
              <div className="lightbox-info">
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-category">{selectedImage.category}</p>
                <p className="lightbox-description">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;