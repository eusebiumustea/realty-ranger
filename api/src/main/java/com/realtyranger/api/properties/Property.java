package com.realtyranger.api.properties;
import jakarta.persistence.*;

@Entity
@Table(name = "properties")
public class Property {
    @Id
    @SequenceGenerator(allocationSize = 1, name = "property-id")
    @GeneratedValue(generator = "property-id", strategy = GenerationType.SEQUENCE)
    private long id;
    private String title;
    private String description;
    private String[] facilities;
    private String[] images;
    private String address;
    private Boolean visible;

    public Property(long id, String title, String description, String[] facilities, String[] images, String address, Boolean visible) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.facilities = facilities;
        this.images = images;
        this.address = address;
        this.visible = visible;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String[] getFacilities() {
        return facilities;
    }

    public void setFacilities(String[] facilities) {
        this.facilities = facilities;
    }

    public String[] getImages() {
        return images;
    }

    public void setImages(String[] images) {
        this.images = images;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getVisible() {
        return visible;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }
}
