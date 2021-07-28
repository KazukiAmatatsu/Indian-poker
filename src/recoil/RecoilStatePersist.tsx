import { FC } from 'react'
import { useRecoilTransactionObserver_UNSTABLE } from 'recoil'

export const RecoilStatePersist: FC = () => {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    for (const modifiedAtom of (snapshot as any).getNodes_UNSTABLE({
      isModified: true
    })) {
      const atomLoadable = snapshot.getLoadable(modifiedAtom)
      if (atomLoadable.state === 'hasValue') {
        localStorage.setItem(
          modifiedAtom.key,
          JSON.stringify({ value: atomLoadable.contents })
        )
      }
    }
  })
  return null
}
