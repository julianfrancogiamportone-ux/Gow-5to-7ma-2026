-- =========================
-- PELEADORES
-- =========================

INSERT INTO peleador (nombre, PuntosVida, energia, defensaBase, UrlImagen) VALUES
('Kratos', 9900, 500, 95, 'https://ejemplo.com/img/kratos.jpg'),
('Atreus', 650, 800, 55, 'https://ejemplo.com/img/atreus.jpg'),
('Thor', 1200, 450, 90, 'https://ejemplo.com/img/thor.jpg'),
('Odin', 850, 1000, 70, 'https://ejemplo.com/img/odin.jpg'),
('Freya', 800, 900, 75, 'https://ejemplo.com/img/freya.jpg'),
('Baldur', 1100, 600, 85, 'https://ejemplo.com/img/baldur.jpg'),
('Heimdall', 900, 850, 80, 'https://ejemplo.com/img/heimdall.jpg'),
('Tyr', 950, 700, 85, 'https://ejemplo.com/img/tyr.jpg'),
('Magni', 1000, 400, 80, 'https://ejemplo.com/img/magni.jpg'),
('Modi', 900, 450, 75, 'https://ejemplo.com/img/modi.jpg'),
('Sigrun', 950, 850, 90, 'https://ejemplo.com/img/sigrun.jpg'),
('Garm', 1300, 300, 95, 'https://ejemplo.com/img/garm.jpg'),
('Fenrir', 1400, 350, 90, 'https://ejemplo.com/img/fenrir.jpg'),
('Surtr', 10peleadorataquespeleador500, 500, 100, 'https://ejemplo.com/img/surtr.jpg'),
('Ares', 1200, 700, 85, 'https://ejemplo.com/img/ares.jpg'),
('Zeus', 1300, 1000, 90, 'https://ejemplo.com/img/zeus.jpg'),
('Hera', 850, 900, 65, 'https://ejemplo.com/img/hera.jpg'),
('Hades', 1250, 800, 90, 'https://ejemplo.com/img/hades.jpg'),
('Poseidon', 1400, 750, 95, 'https://ejemplo.com/img/poseidon.jpg'),
('Athena', 900, 950, 80, 'https://ejemplo.com/img/athena.jpg');

-- =========================
-- ARMAS
-- =========================

INSERT INTO arma (nombre, BonificadorDanio, peso) VALUES
('Hacha Leviatan', 120, 8.5),
('Arco de Garra', 75, 3.0),
('Mjolnir', 150, 12.0),
('Lanza Draupnir', 100, 5.5),
('Espadas del Caos', 130, 7.0),
('Espada de Baldur', 110, 6.5),
('Espada de Heimdall', 115, 6.0),
('Espada de Tyr', 105, 7.5),
('Martillo de Magni', 125, 10.0),
('Espada de Modi', 100, 7.0),
('Espada de Sigrun', 135, 6.5),
('Garras de Garm', 140, 9.0),
('Colmillos de Fenrir', 145, 8.0),
('Espada del Crepusculo', 160, 15.0),
('Espada del Olimpo', 170, 9.5),
('Rayo de Zeus', 180, 4.0),
('Cetro de Hera', 100, 3.5),
('Guadaña de Hades', 155, 11.0),
('Tridente de Poseidon', 165, 13.0),
('Escudo de Atenea', 90, 10.0);


-- =========================
-- ATAQUES
-- =========================

INSERT INTO ataque (nombre, costoEnergia, daniobase) VALUES
('Golpe del Leviatan', 400, 150),
('Flecha de Luz', 35, 110),
('Rayo de Mjolnir', 60, 200),
('Lanza Explosiva', 50, 170),
('Furia Espartana', 80, 250),
('Golpe de Luz', 45, 140),
('Reflejo del Futuro', 70, 180),
('Golpe del Dios de la Guerra', 55, 160),
('Martillazo Divino', 50, 180),
('Ataque Relampago', 45, 150),
('Danza de las Valquirias', 75, 230),
('Mordida de Garm', 60, 210),
('Rugido de Fenrir', 65, 220),
('Llamas del Ragnarok', 100, 300),
('Espada del Olimpo', 90, 280),
('Rayo Divino', 85, 270),
('Ira del Olimpo', 70, 190),
('Almas del Inframundo', 80, 240),
('Furia de los Mares', 90, 290),
('Escudo de la Sabiduria', 50, 130);


-- =========================================
-- TABLA INTERMEDIA: armaspeleador
-- (Peleador_id, Arma_id)
-- =========================================

INSERT armaspeleador INTO armaspeleador (Peleador_id, Arma_id) VALUES
(1, 1),   -- Kratos -> Hacha Leviatan
(1, 5),   -- Kratos -> Espadas del Caos
(2, 2),   -- Atreus -> Arco de Garra
(3, 3),   -- Thor -> Mjolnir
(4, 4),   -- Odin -> Lanza Draupnir
(5, 5),   -- Freya -> Espadas del Caos
(6, 6),   -- Baldur -> Espada de Baldur
(7, 7),   -- Heimdall -> Espada de Heimdall
(8, 8),   -- Tyr -> Espada de Tyr
(9, 9),   -- Magni -> Martillo de Magni
(10, 10), -- Modi -> Espada de Modi
(11, 11), -- Sigrun -> Espada de Sigrun
(12, 12), -- Garm -> Garras de Garm
(13, 13), -- Fenrir -> Colmillos de Fenrir
(14, 14), -- Surtr -> Espada del Crepusculo
(15, 15), -- Ares -> Espada del Olimpo
(16, 16), -- Zeus -> Rayo de Zeus
(17, 17), -- Hera -> Cetro de Hera
(18, 18), -- Hades -> Guadaña de Hades
(19, 19), -- Poseidon -> Tridente de Poseidon
(20, 20); -- Athena -> Escudo de Atenea


-- =========================================
-- TABLA INTERMEDIA: ataquespeleador
-- (Peleador_id, Ataque_id)
-- =========================================

INSERT INTO ataquespeleador (Peleador_id, Ataque_id) VALUES
(1, 1),   -- Kratos -> Golpe del Leviatan
(1, 5),   -- Kratos -> Furia Espartana
(2, 2),   -- Atreus -> Flecha de Luz
(3, 3),   -- Thor -> Rayo de Mjolnir
(4, 4),   -- Odin -> Lanza Explosiva
(5, 5),   -- Freya -> Furia Espartana
(6, 6),   -- Baldur -> Golpe de Luz
(7, 7),   -- Heimdall -> Reflejo del Futuro
(8, 8),   -- Tyr -> Golpe del Dios de la Guerra
(9, 9),   -- Magni -> Martillazo Divino
(10, 10), -- Modi -> Ataque Relampago
(11, 11), -- Sigrun -> Danza de las Valquirias
(12, 12), -- Garm -> Mordida de Garm
(13, 13), -- Fenrir -> Rugido de Fenrir
(14, 14), -- Surtr -> Llamas del Ragnarok
(15, 15), -- Ares -> Espada del Olimpo
(16, 16), -- Zeus -> Rayo Divino
(17, 17), -- Hera -> Ira del Olimpo
(18, 18), -- Hades -> Almas del Inframundo
(19, 19), -- Poseidon -> Furia de los Mares
(20, 20); -- Athena -> Escudo de la Sabiduria