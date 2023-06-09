package capstone.market.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class SearchKeyword {
    @Id
    @GeneratedValue
    private Long id;

    private String keyword;
    private Long searchCount;

}