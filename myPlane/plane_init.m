%% Run Parameters
long = 1; % 0 for lat-dir linear analysis
openLoop = 1;

%% define system parameters

theta0 = 0;
u0 = 512.56;

Xu = -0.01266;
Xw = -0.00588;
Xdele = 0;
XdelT = 0.00414;

Zu = -0.1012;
Zw = -0.818;
Zdele = -56.92;
ZdelT = 0;

Mu = 0.0004;
Mw = -0.02;
Mq = -1.07;
Mdele = -19.42;
MdelT = 0.0001309;

g = 32.5;


%% Longitudinal

Alon = [Xu Xw 0 -g*cos(theta0);...
        Zu Zw u0 -g*sin(theta0);...
        Mu Mw Mq        0;...
        0  0  1         0];


Blon = [Xdele XdelT;...
        Zdele ZdelT;...
        Mdele MdelT;...
        0       0];


% elevator characteristics

w_e = 30;
zeta_e = 0.7;

% engine characteristics

w_t = 2;
zeta_t = 1.1;

close all
%% Linear Analysis - Pitch to pitch cmd

model = 'edPlane';
clear sys_io
sys_io(1) = linio('edPlane/pitch_cmd', 1, 'input');
sys_io(2) = linio('edPlane/OutputProcess/theta', 1, 'output');
sys = linearize(model, sys_io);

figure;
rlocus(sys)
grid on; grid minor;


figure;
bode(sys)
grid on; grid minor;


figure;
pzmap(sys);
grid on; grid minor;
xlim([-3 0])
ylim([-5 5])

figure;
step(sys, [0:0.01:5])



%% Linear Analysis - u to thrust

model = 'edPlane';
clear sys_io
sys_io(1) = linio('edPlane/thrust_cmd', 1, 'input');
sys_io(2) = linio('edPlane/OutputProcess/u', 1, 'output');
sys = linearize(model, sys_io);

figure;
bode(sys)
grid on; grid minor;


figure;
pzmap(sys);
grid on; grid minor;
xlim([-3 0])
ylim([-5 5])

figure;
step(sys, [0:0.01:5])


