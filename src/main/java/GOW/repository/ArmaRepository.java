package GOW.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import GOW.entidades.Arma;

@Repository
public interface ArmaRepository extends JpaRepository<Arma, Long> {
}