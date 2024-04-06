package com.realtyranger.api.properties;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/properties")
public class PropertyController {
    private PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }
    @GetMapping
    public List<Property> getProperties() {
        return propertyService.getProperties();
    }
    @GetMapping(path = "{id}")
    public Property getProperty(@PathVariable Long id) {
        return  propertyService.getProperty(id);
    }
    @PutMapping(path = "{id}")
    public void updateProperty(@PathVariable Long id, @RequestBody Property property) {
        propertyService.updateProperty(id, property);
    }
    @PostMapping()
    public void addProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
    }
    @DeleteMapping(path = "{id}")
    public void removeProperty(@PathVariable Long id) {
        propertyService.removeProperty(id);
    }
}
