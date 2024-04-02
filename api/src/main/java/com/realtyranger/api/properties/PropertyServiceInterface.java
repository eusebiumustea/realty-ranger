package com.realtyranger.api.properties;

import java.util.List;

public interface PropertyServiceInterface {
    List<Property> getProperties();
    void addProperty(Property property);
    void updateProperty(Long id, Property property);
    void removeProperty(Long id);
    Property getProperty(Long id);

}
