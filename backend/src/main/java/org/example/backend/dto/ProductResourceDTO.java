package org.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResourceDTO {

    private UUID id;
    private String name;
    private String url;
    private String type;
    private Boolean isPrimary;

}
