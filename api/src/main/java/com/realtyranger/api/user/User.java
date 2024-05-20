package com.realtyranger.api.user;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(nullable = false)
    String firstName;
    @Column(nullable = false)
    String lastName;
    @Column(nullable = false, unique = true)
    String email;
    @Column(nullable = false)
    String password;
    Long[] favoriteProperties;

    public User(Long id, String firstName, String lastName, String email, String password, Long[] favoriteProperties) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.favoriteProperties = favoriteProperties;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long[] getFavoriteProperties() {
        return favoriteProperties;
    }

    public void setFavoriteProperties(Long[] favoriteProperties) {
        this.favoriteProperties = favoriteProperties;
    }
}
