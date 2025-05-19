package org.example.backend.specification;

import org.example.backend.entities.Product;
import org.springframework.data.jpa.domain.Specification;

import java.util.UUID;

public class ProductSpecification {

    /**
     * Root<T>: Đại diện cho thực thể (entity) được truy vấn (ví dụ: Product trong trường hợp này).
     * CriteriaQuery<?>: Đại diện cho truy vấn đang được xây dựng.
     * CriteriaBuilder: Công cụ để tạo các điều kiện truy vấn (ví dụ: bằng, lớn hơn, v.v.).
     * Predicate: Điều kiện hoặc bộ lọc được áp dụng cho truy vấn.*/

    public static Specification<Product> hasCategoryId(UUID categoryId){
        return ((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("category").get("id"), categoryId));
    }

    public static Specification<Product> hasCategoryTypeId(UUID categoryTypeId){
        return ((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("categoryType").get("id"), categoryTypeId));
    }
}
