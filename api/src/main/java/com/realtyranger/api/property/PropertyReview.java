package com.realtyranger.api.property;

import jakarta.persistence.Column;

public class PropertyReview {
  private String username;
  private String avatar;
  @Column(length = 3000)
  private String description;
  private Long totalAgrees;
  private Long totalDisagrees;

}
