package com.realtyranger.api.properties;
import jakarta.persistence.*;
import org.springframework.boot.context.properties.bind.DefaultValue;

@Entity
@Table(name = "properties")
public class Property {
    @Id
    @SequenceGenerator(allocationSize = 1, name = "property-id")
    @GeneratedValue(generator = "property-id", strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(length = 5000)
    private String title;
    @Column(length = 50000)
    private String description;

    private Long price;
    private String[] facilities;

    private String[] images;
    @Column(length = 500)
    private String address;
    private Boolean visible = true;

    public Property() {
    }

    public Property(long id, String title, String description, Long price, String[] facilities, String[] images, String address, Boolean visible) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
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

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
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
