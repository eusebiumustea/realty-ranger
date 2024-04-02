package com.realtyranger.api.properties;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService implements PropertyServiceInterface {
    private PropertyRepository propertyRepository;

    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    @Override
    public List<Property> getProperties() {
        return propertyRepository.findAll();
    }
   @Override
   public void addProperty(Property property) {
        propertyRepository.save(property);
   }
   @Override
   public void updateProperty(Long id, Property property) {
        Property currentProperty = propertyRepository.findById(id).orElseThrow(() -> new IllegalStateException("Property not found"));
        currentProperty.setTitle(property.getTitle());
        currentProperty.setDescription(property.getDescription());
        currentProperty.setAddress(property.getAddress());
        currentProperty.setVisible(property.getVisible());
        currentProperty.setFacilities(property.getFacilities());
        currentProperty.setImages(property.getImages());
        propertyRepository.save(currentProperty);
   }
   @Override
   public void removeProperty(Long id) {
        if (!propertyRepository.existsById(id)) {
            return;
        }
        propertyRepository.deleteById(id);
   }
    @Override
    public Property getProperty(Long id) {
        return propertyRepository.findById(id).orElseThrow(() -> new IllegalStateException(String.format("Item with id %s NOT found!", id)));

    }

}
