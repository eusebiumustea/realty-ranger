package com.realtyranger.api.property;
import jakarta.persistence.*;

@Entity
@Table(name = "properties")
public class Property {
    @Id
    @SequenceGenerator(allocationSize = 1, name = "property-id")
    @GeneratedValue(generator = "property-id", strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(length = 3000)
    private String title;
    @Column(length = 30000)
    private String description;
    private AgentProfile agentProfile;
    @Column(length = 50)
    private String propertyType;
    @Column(length = 20)
    private String dealType;
    private Double reviewScore = 0.0;
    private PropertyReview[] reviews;
    private String price;
    private PropertyEssentials essentials;
    private Feature[] features;
    private String[] images;
    @Column(length = 100)
    private String location;
    @Column(length = 500)
    private String address;
    private Boolean active = true;

    public Property(long id, String title, String description, AgentProfile agentProfile, String propertyType, String dealType, Double reviewScore, PropertyReview[] reviews, String price, PropertyEssentials essentials, Feature[] features, String[] images, String location, String address, Boolean active) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.agentProfile = agentProfile;
        this.propertyType = propertyType;
        this.dealType = dealType;
        this.reviewScore = reviewScore;
        this.reviews = reviews;
        this.price = price;
        this.essentials = essentials;
        this.features = features;
        this.images = images;
        this.location = location;
        this.address = address;
        this.active = active;
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

    public AgentProfile getAgentProfile() {
        return agentProfile;
    }

    public void setAgentProfile(AgentProfile agentProfile) {
        this.agentProfile = agentProfile;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getDealType() {
        return dealType;
    }

    public void setDealType(String dealType) {
        this.dealType = dealType;
    }

    public Double getReviewScore() {
        return reviewScore;
    }

    public void setReviewScore(Double reviewScore) {
        this.reviewScore = reviewScore;
    }

    public PropertyReview[] getReviews() {
        return reviews;
    }

    public void setReviews(PropertyReview[] reviews) {
        this.reviews = reviews;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public PropertyEssentials getEssentials() {
        return essentials;
    }

    public void setEssentials(PropertyEssentials essentials) {
        this.essentials = essentials;
    }

    public Feature[] getFeatures() {
        return features;
    }

    public void setFeatures(Feature[] features) {
        this.features = features;
    }

    public String[] getImages() {
        return images;
    }

    public void setImages(String[] images) {
        this.images = images;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
