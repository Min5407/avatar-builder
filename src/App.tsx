import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useConfigurationStore } from './store/configuration';
import { cn } from './utils/type/tailwind';

function App() {
  const categoryList = useConfigurationStore((state) => state.categories);
  const currentCategory = useConfigurationStore(
    (state) => state.currentCategory
  );
  const assetList = useConfigurationStore((state) => state.assets);
  const { setCurrentCategory } = useConfigurationStore(
    (state) => state.actions
  );

  const selectedAssetList = assetList.filter(
    (item) => item.assetType === currentCategory?.categoryType
  );
  return (
    <div className='min-h-screen bg-[#333] flex flex-col'>
      <div className='flex-1 flex justify-center items-center'>
        <Canvas camera={{ position: [1, 1, 1] }}>
          <OrbitControls />
          <color attach='background' args={['#333']} />
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshNormalMaterial />
          </mesh>
        </Canvas>
      </div>

      <footer>
        <div className='max-w-[1280px] mx-auto bg-white rounded-xl mb-5 text-slate-600'>
          <ul className='flex gap-2 p-6 items-center justify-around '>
            {categoryList.map((category) => (
              <li
                key={category.position}
                className={cn('text-lg font-semibold transition-colors', {
                  'text-sky-700':
                    category.categoryType === currentCategory?.categoryType,
                })}
              >
                <button onClick={() => setCurrentCategory(category)}>
                  {category.categoryType}
                </button>
              </li>
            ))}
          </ul>
          <ul className='flex gap-4 px-6 pb-6 items-center '>
            {selectedAssetList.map(({ name, thumbnailUrl }) => (
              <li key={name}>
                <img
                  src={thumbnailUrl}
                  alt='asset thumbnail'
                  className='w-24 h-24 rounded-xl'
                />
                <span className='w-full text-center inline-block  text-slate-600'>
                  {name}
                </span>
              </li>
            ))}

            {selectedAssetList.length === 0 && (
              <p className='text-center w-full text-lg text-slate-400'>
                No asset for {currentCategory?.categoryType}
              </p>
            )}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
