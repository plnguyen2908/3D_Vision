const lessonCode={
math:[
'import numpy as np',
'R = np.array([[0., -1, 0], [1, 0, 0], [0, 0, 1]])',
't = np.array([1., 0, 0])',
'p = np.array([1., 0, 0])',
'q = R @ p + t',
'recovered = R.T @ (q - t)',
'assert np.allclose(recovered, p)',
'assert np.allclose(R.T @ R, np.eye(3))',
'print("Transformed:", q, "Recovered:", recovered)'
].join('\n'),
python:[
'import numpy as np',
'P = np.array([[x,y,z] for x in (0.,1.)',
'              for y in (0.,1.) for z in (0.,1.)])',
'a = np.pi / 3',
'R = np.array([[np.cos(a),-np.sin(a),0],',
'              [np.sin(a), np.cos(a),0],[0,0,1]])',
't = np.array([2., -1., 3.])',
'Q = P @ R.T + t',
'back = (Q - t) @ R',
'print("Maximum round-trip error:", np.max(np.abs(back-P)))'
].join('\n'),
optim:[
'import numpy as np',
'observations = np.array([1.,2.,3.])',
'theta = 10.',
'for step in range(3):',
'    r = theta - observations',
'    J = np.ones((len(r), 1))',
'    delta = np.linalg.lstsq(J, -r, rcond=None)[0][0]',
'    theta += delta',
'    print(step, theta, np.sum((theta-observations)**2))',
'print("With outlier:", np.mean([1.,2.,3.,100.]))'
].join('\n'),
image:[
'import numpy as np',
'L = np.eye(3)',
'intensities = np.array([.2,.3,.6])',
'g = np.linalg.lstsq(L, intensities, rcond=None)[0]',
'albedo = np.linalg.norm(g)',
'normal = g / albedo',
'print("Albedo:", albedo, "Normal:", normal)',
'assert np.allclose(L @ (albedo*normal), intensities)'
].join('\n'),
camera:[
'import numpy as np',
'K = np.array([[500.,0,320],[0,500,240],[0,0,1]])',
'P = np.array([[1.,.5,4.],[2.,1.,8.]])',
'assert np.all(P[:,2] > 0)',
'h = P @ K.T',
'pixels = h[:,:2] / h[:,2:3]',
'print(pixels)  # both [445, 302.5]',
'assert np.allclose(pixels[0], pixels[1])'
].join('\n'),
features:[
'import math',
'success, inlier_fraction = .99, .5',
'for sample_size in (4, 8):',
'    N = math.ceil(math.log(1-success) /',
'                  math.log(1-inlier_fraction**sample_size))',
'    print("Sample size:", sample_size, "Trials:", N)'
].join('\n'),
epipolar:[
'import numpy as np',
'# X2 = X1 + t; unit focal length, identity rotations',
't = np.array([-1.,0.,0.])',
'E = np.array([[0.,-t[2],t[1]],',
'              [t[2],0.,-t[0]],[-t[1],t[0],0.]])',
'X1 = np.array([.5,.2,4.])',
'X2 = X1 + t',
'x1, x2 = X1/X1[2], X2/X2[2]',
'print("Epipolar residual:", x2 @ E @ x1)',
'assert abs(x2 @ E @ x1) < 1e-12'
].join('\n'),
stereo:[
'f, B = 700., .2',
'for disparity in (35., f*B/12.):',
'    Z = f*B/disparity',
'    sigma_Z = Z*Z/(f*B)  # disparity std = 1 pixel',
'    print("Depth (m):", Z, "Linearized std (m):", sigma_Z)'
].join('\n'),
sfm:[
'import numpy as np',
'X = np.array([1., .5, 4.])',
't = np.array([-.2, 0., 0.])',
'def project(p): return p[:2]/p[2]',
'for scale in (1.,10.):',
'    print(scale, project(scale*X), project(scale*(X+t)))',
'# Both camera projections are unchanged by global scaling.'
].join('\n'),
dense:[
'import numpy as np',
'distances = np.array([.02,-.01])',
'weights = np.array([2.,1.])',
'fused = np.sum(weights*distances)/np.sum(weights)',
'print("Fused signed distance:", fused)  # .01 meters'
].join('\n'),
nerf:[
'import numpy as np',
'alpha = np.array([.5, 1.])',
'colors = np.array([[1.,0,0],[0.,0,1]])',
'T = np.concatenate(([1.], np.cumprod(1-alpha)[:-1]))',
'weights = T*alpha',
'print("Weights:", weights, "RGB:", weights @ colors)',
'assert np.allclose(weights @ colors, [.5,0.,.5])'
].join('\n')
};
